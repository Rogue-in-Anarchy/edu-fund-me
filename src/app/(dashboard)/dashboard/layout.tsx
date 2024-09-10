import React from 'react'
import DashboardNavBar from '@/components/atom/dashboard-navbar'
import Sidebar from '@/components/atom/sidebar'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relativ w-full h-screen'>
            <div className="relative w-full">
                <DashboardNavBar />
            </div>

            <div className="relative flex justify-between items-start w-full pt-28">
                <Sidebar />
                <div className="ml-auto overflow-auto w-4/5 mb-20 mt-5">
                    {/* Page Content */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout