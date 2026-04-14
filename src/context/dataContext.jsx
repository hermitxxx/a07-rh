'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// const getData = async () => {
//     const res = await fetch('/data.json')
//     const data = await res.json()

//     return data
// }

// if (!res.ok) {
//     throw new Error(`Failed to fetch data: ${res.status}`)
// }

// error instanceof Error ? error.message : 'Unknown error'

// data fetching for the whole app, so we don't have to fetch it multiple times in different components. We can just use the context to access the data and update it if needed.
export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                setError(null)

                const res = await fetch('/data.json')
                const result = await res.json();
                setData(result)
            }
            catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])
    
    const value = {
        data,
        setData,
        loading,
        error
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export const useData = () => {
    const context = useContext(DataContext)
    return context
}

export default DataProvider;