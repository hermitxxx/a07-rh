'use client'
import TimelineCard from '@/components/TimelineCard';
import { useData } from '@/context/dataContext';
import Link from 'next/link';
import { MdKeyboardArrowDown } from "react-icons/md";

const Timeline = () => {
    const { timeline, filterArr, setFilterArr, clickState, setClickState } = useData()

    function handleFilter(filter) {
        if (filter === 'All') {
            setClickState('all')
        }
        else if (filter === 'Call') {
            const filteredTimeline = timeline.filter(history => history.type === filter)
            setFilterArr(filteredTimeline)
            setClickState('call')
        }
        else if (filter === 'Text') {
            const filteredTimeline = timeline.filter(history => history.type === filter)
            setFilterArr(filteredTimeline)
            setClickState('text')
        }
        else if (filter === 'Video') {
            const filteredTimeline = timeline.filter(history => history.type === filter)
            setFilterArr(filteredTimeline)
            setClickState('video')
        }
        else {
            setClickState('all')
        }
    }

    console.log(filterArr);

    return (
        <div className='container mx-auto py-10'>
            <h1 className="text-4xl p-2 font-bold">Timeline</h1>
            <div className='mb-4'>
                <details className="dropdown">
                    <summary className="btn m-1 font-medium">{clickState.toUpperCase()} <MdKeyboardArrowDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={() => handleFilter('Call')}><a>Call</a></li>
                        <li onClick={() => handleFilter('Text')}><a>Text</a></li>
                        <li onClick={() => handleFilter('Video')}><a>Video</a></li>
                    </ul>
                </details>
            </div>

            <div className='grid grid-cols-1 gap-2 min-h-[calc(100vh-25rem)] content-start'>
                {
                    clickState === 'all' && timeline.length > 0 ? timeline.map((history, index) => <TimelineCard key={index} history={history}></TimelineCard>) : <div className={`min-h-[calc(100vh-25rem)] flex items-center justify-center ${clickState !== 'all' && 'hidden'}`}><div className='space-y-5 text-center'><h1 className='font-semibold text-custom text-3xl'>Nothing in timeline</h1><Link href='/' className="btn bg-custom text-white font-medium">Go to gome</Link></div></div>
                }
                {
                    clickState !== 'all' && filterArr.map((history, index) => <TimelineCard key={index} history={history}></TimelineCard>)
                } 
            </div>
        </div>
    );
};

export default Timeline;