import Link from 'next/link';
import React from 'react';

const ShowError = ({ error }) => {
    return (
        <div className='min-h-[calc(100vh-15rem)] flex items-center justify-center'>
            <div className='text-center space-y-5'>
                <p className='text-4xl text-custom font-bold'>{error}</p>
                <p className='text-gray-500'>Try finding another user</p>
                <Link href='/'>
                    <button className="btn bg-custom text-white">
                        Go to home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ShowError;