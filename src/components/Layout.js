import React from 'react'
import { Header, Sidebar } from './Components'

const Layout = ({children}) => {
    return (
        <>
            <header><Header /></header>
            <div className="flex gap-2">
                <div className="min-h-[91vh] bg-slate-600 w-1/4">
                    <Sidebar />
                </div>
                <div className="min-h-[91vh] bg-slate-400 w-3/4">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout