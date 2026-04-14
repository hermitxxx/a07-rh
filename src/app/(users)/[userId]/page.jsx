'use client'
import { useData } from '@/context/dataContext';
import React, { use } from 'react';


const UserDetail = ({ params }) => {
    const data = useData()
    const users = data.data
    const { userId } = use(params)

    console.log(users)
    // console.log(users)
    const selectedUser = users.find(user => user.id == Number(userId))
    console.log(selectedUser);
    return (
        <>
            
        </>
    );
};

export default UserDetail;