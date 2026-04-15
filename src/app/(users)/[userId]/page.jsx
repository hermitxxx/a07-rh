'use client'
import { useData } from '@/context/dataContext';
import React, { use } from 'react';
import Image from 'next/image';
import Loading from '../loading';
import Error from '../error';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCameraBold } from "react-icons/pi";
import { Bounce, toast } from 'react-toastify';



// {
//     "id": 1,
//     "name": "John Doe",
//     "picture": "🧑",
//     "email": "john@example.com",
//     "days_since_contact": 12,
//     "status": "overdue",
//     "tags": [
//         "college",
//         "close friend"
//     ],
//     "bio": "Met in university. Love hiking together.",
//     "goal": 14,
//     "next_due_date": "2025-07-20"
// }

const UserDetail = ({ params }) => {
    const h1Style = 'text-3xl text-custom font-semibold';
    const pStyle = 'text-gray-600';
    const cardStyle = 'bg-white rounded-lg space-y-2 shadow-sm p-6 flex items-center justify-center text-center';

    const { data: users, loading, error, timeline, setTimeline } = useData()
    const { userId } = use(params)

    const selectedUser = users.find(user => user.id === parseInt(userId))
    const currentDate = new Date().toISOString().split('T')[0]
    // console.log(currentDate);

    const statusChecker = () => {
        if (selectedUser.status === 'overdue') {
            return 'bg-red-400'
        }
        else if (selectedUser.status === 'almost due') {
            return 'bg-amber-400'
        }
        else if (selectedUser.status === 'on-track') {
            return 'bg-custom'
        }
    }

    function handleContactClick(clicked) {
        if (clicked === 'call') {
            const updatedUserDetail = {
                name: selectedUser.name,
                date: currentDate,
                type: 'Call'
            }
            setTimeline([...timeline, updatedUserDetail])
        }
        else if (clicked === 'text') {
            const updatedUserDetail = {
                name: selectedUser.name,
                date: currentDate,
                type: 'Text'
            }
            setTimeline([...timeline, updatedUserDetail])
        }
        else if (clicked === 'video') {
            const updatedUserDetail = {
                name: selectedUser.name,
                date: currentDate,
                type: 'Video'
            }
            setTimeline([...timeline, updatedUserDetail])
        }
        toast.success(`${clicked.toUpperCase()} added to timeline`, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    console.log(timeline);

    if (loading) {
        return <Loading />
    }
    else if (error) {
        return <Error error={error}></Error>
    }
    else {
        if (!selectedUser) {
            if (loading) {
                return <Loading />
            }
            return <Error></Error>
        }
        else if(!loading) {
            return (
                <section className='bg-base-200'>
                    <div className="container grid grid-cols-1 sm:grid-cols-[1fr_2fr] mx-auto gap-3 my-10">
                        <div className="user-card">
                            <div href={`/${selectedUser.id}`} className="flex flex-col items-center gap-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                                    <Image src={selectedUser.picture} alt={selectedUser.name} width={80} height={80} className="w-full h-full object-cover" />
                                </div>

                                {/* Name */}
                                <p className="text-[17px] font-semibold text-gray-900 mt-1">{selectedUser.name}</p>

                                {/* Timestamp */}
                                <p className="text-sm text-gray-400 -mt-1">{selectedUser.days_since_contact}d ago</p>

                                {/* Family badge */}
                                <div className="flex items-center justify-center gap-2 flex-wrap">
                                    {
                                        selectedUser.tags.map((tag, index) => {
                                            return (
                                                <span key={index} className="bg-green-100
                                     text-green-800 text-xs font-medium px-4 py-1 rounded-md tracking-wide">
                                                    {tag}
                                                </span>
                                            )
                                        })
                                    }
                                </div>


                                {/* Overdue badge */}
                                <span className={`${statusChecker()} text-white text-sm font-medium px-5 py-1.5 rounded-full`}>
                                    {selectedUser.status.toUpperCase()}
                                </span>

                                {/* bio */}
                                <div className='text-center text-gray-500 font-semibold'>
                                    <i>{`"${selectedUser.bio}"`}</i>
                                    <p className='text-md font-light text-gray-400 mt-3'>Email: {selectedUser.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                                <div className={cardStyle}>
                                    <div className='space-y-3'>
                                        <h1 className={h1Style}>{selectedUser.days_since_contact}</h1>
                                        <p className={pStyle}>Days Since Contact</p>
                                    </div>
                                </div>
                                <div className={cardStyle}>
                                    <div className='space-y-3'>
                                        <h1 className={h1Style}>{selectedUser.goal}</h1>
                                        <p className={pStyle}>Goal (Days)</p>
                                    </div>
                                </div>
                                <div className={cardStyle}>
                                    <div className='space-y-3'>
                                        <h1 className={h1Style}>{selectedUser.next_due_date}</h1>
                                        <p className={pStyle}>Next Due</p>
                                    </div>
                                </div>
                            </div>

                            <div className='max-sm:p-4 bg-white flex-1 rounded-lg shadow-sm flex items-center relative'>
                                <button className="btn absolute max-sm:top-16 max-sm:right-6 top-11 right-10">Edit</button>
                                <div className='space-y-6 px-8'>
                                    <h1 className='font-semibold text-custom text-3xl'>Relationship Goal</h1>
                                    <p className='text-gray-500'>Connect every <span className='font-bold text-black'>{selectedUser.goal} days</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className='flex items-center p-4 cursor-pointer rounded-lg shadow-sm flex-1 gap-2 bg-white justify-center font-semibold text-lg'>
                                <RiNotificationSnoozeLine />Snooze 2 weeks
                            </div>
                            <div className='flex items-center p-4 cursor-pointer rounded-lg shadow-sm flex-1 gap-2 bg-white justify-center font-semibold text-lg'>
                                <FiArchive />Archive
                            </div>
                            <div className='flex items-center p-4 cursor-pointer rounded-lg shadow-sm text-red-400 flex-1 gap-2 bg-white justify-center font-semibold text-lg'>
                                <RiDeleteBinLine />Delete
                            </div>
                        </div>
                        <div className="bg-white shadow-sm p-4 space-y-5 rounded-lg px-8">
                            <h1 className='text-custom text-lg font-semibold'>Quick Check-In</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 text-center'>
                                <div onClick={() => handleContactClick('call')} className='space-y-3 hover:opacity-85 cursor-pointer bg-base-200 border flex flex-col items-center border-gray-300 rounded-lg p-4'>
                                    <h1 className={h1Style}><BiPhoneCall /></h1>
                                    <p className={pStyle}>Call</p>
                                </div>
                                <div onClick={() => handleContactClick('text')} className='space-y-3 hover:opacity-85 cursor-pointer bg-base-200 border flex flex-col items-center border-gray-300 rounded-lg p-4'>
                                    <h1 className={h1Style}><LuMessageSquareMore /></h1>
                                    <p className={pStyle}>Text</p>
                                </div>
                                <div onClick={() => handleContactClick('video')} className='space-y-3 hover:opacity-85 cursor-pointer bg-base-200 border flex flex-col items-center border-gray-300 rounded-lg p-4'>
                                    <h1 className={h1Style}><PiVideoCameraBold /></h1>
                                    <p className={pStyle}>Video</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

};

export default UserDetail;