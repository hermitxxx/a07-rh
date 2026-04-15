'use client'
import Link from 'next/link';
import React from 'react';

const error = () => {
    return (
        <div className='min-h-[calc(100vh-15rem)] flex items-center justify-center'>
            <div className='text-center space-y-4'>
                <p className='text-4xl text-custom font-bold'>404 : <span className='text-black'>Not found</span></p>
                <p className='text-gray-500'>Please try to find valid user.</p>
                <Link href='/'>
                    <button className="btn bg-custom text-white">
                        Go to home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default error;