import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-[calc(100vh-20rem)] flex items-center justify-center'>
            <div className='space-y-4 text-center'>
                <h1 className='font-semibold text-4xl'><span className='text-custom'>404</span> : Not Found</h1>
                <p className='text-gray-400'>The item you are looking for does not exist</p>
                <Link href='/' className="btn bg-custom text-white font-medium">
                    Go to home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;