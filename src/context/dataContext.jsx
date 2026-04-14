'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

const getData = async () => {
    const res = await fetch('/data.json')
    const data = await res.json()

    return data
}

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const result = await getData()
            setData(result)
        }

        loadData()
    }, [])

    const value = {
        data,
        setData
    }

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

export const useData = () => {
    const context = useContext(DataContext)
    return context
}

export default DataProvider;