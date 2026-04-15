'use client'
import StatsChart from '@/components/StatsChart';
import { useData } from '@/context/dataContext';
import React from 'react';

const Stats = () => {
    const { timeline } = useData()
    return (
        <section className='min-h-[calc(100vh-15rem)] my-5 py-10'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold'>Friendship Analytics</h1>

                <div className="bg-white rounded-lg shadow-sm p-5 my-5">
                    <p className='text-lg font-semibold'>By Interaction Type</p>

                    <div className='flex items-center justify-center p-5 w-full min-h-[calc(100vh-25rem)]'>
                        {
                            timeline.length === 0 ? <h1 className='text-custom text-lg'>No interactions yet.</h1> : <StatsChart></StatsChart>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;