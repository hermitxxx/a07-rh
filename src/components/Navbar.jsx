'use client'
import Link from 'next/link';
import React from 'react';
import { LuClock3 } from "react-icons/lu";
import { GoGraph } from "react-icons/go";
import { RiHome2Line } from "react-icons/ri";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    const navItemClass = (href) =>
        pathname === href ? 'bg-custom text-white' : '';

    return (
        <div className='border-b border-gray-200 bg-white'>
            <div className='container mx-auto flex items-center justify-between py-2'>
                <div className="navbar-start">
                    <Link href='/' className="btn btn-ghost gap-0 text-xl">Keen<span className='text-custom'>Keeper</span></Link>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content -left-40 top-14 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link className={navItemClass('/')} href='/'><RiHome2Line />Home</Link></li>
                            <li><Link className={navItemClass('/timeline')} href='/timeline'><LuClock3 />Timeline</Link></li>
                            <li><Link className={navItemClass('/stats')} href='/stats'><GoGraph />Stats</Link></li>
                        </ul>
                    </div>

                    <ul className="menu menu-horizontal px-1 hidden sm:flex gap-2">
                        <li><Link className={navItemClass('/')} href='/'><RiHome2Line className='font-bold w-4 h-4' />Home</Link></li>
                        <li><Link className={navItemClass('/timeline')} href='/timeline'><LuClock3 className='font-bold w-4 h-4' />Timeline</Link></li>
                        <li><Link className={navItemClass('/stats')} href='/stats'><GoGraph className='font-bold w-4 h-4' />Stats</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;