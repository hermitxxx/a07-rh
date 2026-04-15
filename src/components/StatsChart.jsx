'use client'
import { useData } from '@/context/dataContext';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const colors = {
    Call: '#244D3F',
    Text: '#7E35E1',
    Video: '#37A163'
}


const StatsChart = () => {
    const { timeline } = useData()
    const counterObj = {
        Call: 0,
        Text: 0,
        Video: 0
    }
    const interactionCount = timeline.reduce((acc, item) => {
        const type = item?.type

        if(type && acc[type] !== undefined) {
            acc[type] += 1
        }

        return acc
    },counterObj)

    // console.log(interactionCount);
    const chartData = Object.entries(interactionCount).map(([name, value]) => {
        return {
            name,
            value,
            fill: colors[name]
        }
    })

    console.log(chartData);

    return (
        <div className="w-full max-w-80">
            <div className='aspect-square'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius="50%"
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='mt-4 grid grid-cols-3 gap-2 text-sm'>
                {
                    Object.entries(interactionCount).map(([type, count]) => (
                        <div key={type} className='flex items-center gap-2 justify-center text-gray-700'>
                            <span className='inline-block w-2.5 h-2.5 rounded-full' style={{ backgroundColor: colors[type] }} />
                            <span>{type}: {count}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default StatsChart;