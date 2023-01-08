import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="text-slate-200 font-semibold bg-slate-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <p className="flex title-font font-medium items-center text-slate-200 mb-4 md:mb-0">
                        <span className="ml-3 text-3xl">SpiceJet</span>
                    </p>
                    <nav className="md:ml-auto flex flex-wrap items-center gap-5 text-base justify-center">
                        <p className="mr-5 cursor-pointer hover:text-slate-900">Home</p>
                        <p className="mr-5 cursor-pointer hover:text-slate-900">About</p>
                        <p className="mr-5 cursor-pointer hover:text-slate-900">Services</p>
                        <p className="mr-5 cursor-pointer hover:text-slate-900">Help</p>
                    </nav>
                    <button className="inline-flex items-center bg-slate-600 border-0 py-1 px-3 focus:outline-none hover:bg-slate-300 hover:text-slate-800 duration-500 rounded text-base mt-4 md:mt-0">Book Ticket
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export const Sidebar = () => {
    return (
        <>
            <div className="p-4 pl-40">
                <div className="flex font-semibold text-lg text-slate-200  flex-col">
                    <Link to={'/online-booking'}><p className='hover:bg-slate-700 py-2 px-12 cursor-pointer'>Online Booking</p></Link>
                    <Link to={'/boarding-pass'}><p className='hover:bg-slate-700 py-2 px-12 cursor-pointer'>Boarding pass</p></Link>
                    <Link to={'/booking-history'}><p className='hover:bg-slate-700 py-2 px-12 cursor-pointer'>Booking History</p></Link>
                    <Link to={'/cancel-booking'}><p className='hover:bg-slate-700 py-2 px-12 cursor-pointer'>cancel Booking</p></Link>
                    <Link to={'/enquiry'}><p className='hover:bg-slate-700 py-2 px-12 cursor-pointer'>Enquiry</p></Link>
                </div>
            </div>

        </>
    )
}

export const TicketView = ({ data }) => {
    return (
        <>
            <div className="p-5">
                <div className="bg-slate-500 text-slate-200 hover:text-black duration-300 p-5 hover:bg-slate-400 border-2 border-slate-400 hover:border-slate-300 h-60 rounded-xl">
                    <div className="flex justify-between pt-5">
                        <p className='font-serif font-semibold text-2xl'>Name : {data.name}</p>
                        <p className='font-semibold text-lg '>#{data.ticket}</p>
                    </div>
                    <div className="flex justify-between pt-5">
                        <p className='font-semibold text-lg font-serif'>{data.from}</p>
                        <p className='font-semibold text-lg font-serif'>{data.to}</p>
                    </div>
                    <div className="flex justify-between pb-5">
                        <p className='font-semibold text-lg '>{data.dtime}</p>
                        <p className='font-semibold text-lg '>{data.atime}</p>
                    </div>
                    <div className="">
                        <p className='font-semibold text-lg '>{data.adults} Adults with upto {data.adults * 7.5} kg luggage</p>
                        <p className='font-semibold text-lg '>Date of Journey : {data.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

