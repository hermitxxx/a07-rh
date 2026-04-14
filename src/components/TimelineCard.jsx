import Image from 'next/image';
import React from 'react';

const TimelineCard = ({ history }) => {
    const { name, date, type } = history
    return (
        <div>
            <div className="flex items-center gap-3 px-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <span className="text-3xl inline-block leading-none shrink-0">
                    {
                        type === 'Call' && <Image src='/call.png' width={24} height={24} alt='Call'></Image> ||
                        type === 'Text' && <Image src='/text.png' width={24} height={24} alt='Text'></Image> ||
                        type === 'Video' && <Image src='/video.png' width={24} height={24} alt='Video'></Image>
                    }
                </span>
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-[15px] font-semibold text-gray-900 tracking-tight">{type}</span>
                        <span className="text-sm text-gray-400">with {name}</span>
                    </div>
                    <p className="text-[13px] text-gray-400">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;