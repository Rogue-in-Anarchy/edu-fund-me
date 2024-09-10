"use client"

import React from 'react'
import navbar from '@/data/navbar'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const firstSlice = navbar.slice(0, 5)
    const secondSlice = navbar.slice(5, 9)

    const pathname = usePathname()


    return (
        <div className='fixed bg-primary-3 h-[calc(100vh-112px)] w-fit flex flex-col justify-between py-10'>
            <div className="grid">
                {firstSlice?.map((item, index) => (<div className='' key={index}>
                    <Link href={`${item.link}`} className={`flex items-center gap-x-4 py-3 px-6 ${pathname === item.link ? "bg-primary-2/30 text-primary-1" : " "} hover:bg-primary-2/30 hover:text-primary-1`}>
                        <Image src={item.image} alt={item.title} />
                        <p className="text-bold text-white">{item.title}</p>
                    </Link>
                </div>))}
            </div>

            <div className="grid">
                {secondSlice?.map((item, index) => (<div className='' key={index}>
                    <Link href={`${item.link}`} className={`flex items-center gap-x-4 py-3 px-6 ${pathname === item.link ? "bg-primary-2/30 text-primary-1" : " "} hover:bg-primary-2/30 hover:text-primary-1`}>
                        <Image src={item.image} alt={item.title} />
                        <p className="text-bold text-white">{item.title}</p>
                    </Link>
                </div>))}
            </div>

        </div>
    )
}

export default Sidebar