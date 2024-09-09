import React from 'react'
import Image from 'next/image'

const ProposalCard = ({ icon, value, title, yields, iconYield }: { icon: string, value?: number | string, title: string, yields?: string, iconYield?: string }) => {
    return (
        <div className='flex flex-col justify-center items-center px-7 py-5 rounded-md drop-shadow-md shadow-md space-y-4'>
            <div className="flex items-center gap-x-2">
                <Image src={icon} alt={title} className='w-5 h-5' />
                <p className=' text-bleck text-xl font-bold'>{value}</p>
            </div>

            <div className="space-y-3 flex flex-col justify-center items-center">
                <h2 className='text-sm font-medium text-gray-600'>{title}</h2>
                <p className='flex items-center gap-x-2 text-xs font-bold'>
                    {yields}
                    {iconYield && <span className="">
                        <Image src={iconYield} alt='yield icon' />
                    </span>}
                </p>
            </div>
        </div>
    )
}

export default ProposalCard