import React, { useState } from 'react'
import Layout from '../components/Layout'
import { tickets } from '../data/tickets'

const Booking = () => {

    const initialUser = {
        id:0,
        ticket:22542,
        name: '',
        from: '',
        to: '',
        dtime:'10:20',
        atime:'14:10',
        adults: '',
        address: '',
        date: '',
    }
    const [user, setUser] = useState(initialUser)
    

    const Handleclick = () =>{
        setUser({...user, id:tickets.length + 1})
        tickets.push(user)
        localStorage.setItem( 'data', JSON.stringify(tickets))
        console.log(user)
    }


    return (
        <>
            <Layout>
                <div className="p-10 ">
                    <div className="flex w-[40%] justify-between">
                        <div className="">
                            <p className='font-serif text-white'>FROM </p>
                            <input className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , from:e.target.value})}} value={user.from} type="text" name="" id="" />
                        </div>
                        <div className="">
                            <p className='font-serif text-white'>TO</p>
                            <input className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , to:e.target.value})}} value={user.to} type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-[40%] py-4 justify-between">
                        <div className="">
                            <p className='font-serif text-white'>Name</p>
                            <input className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , name:e.target.value})}} value={user.name} type="text" name="" id="" />
                        </div>
                        <div className="">
                            <p className='font-serif text-white'>Address</p>
                            <input className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , address:e.target.value})}} value={user.address} type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="flex w-[40%] py-4 justify-between">
                        <div className="">
                            <p className='font-serif text-white'>No of adult</p>
                            <input className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , adults:e.target.value})}} value={user.adults} type="text" name="" id="" />
                        </div>
                        <div className="">
                            <p className='font-serif text-white'>Date of journey</p>
                            <input min={'2022-12-12'} className='outline-none bg-slate-300 px-2 py-1 focus:bg-slate-200' onChange={(e)=>{setUser({...user , date:e.target.value})}} value={user.date} type="date" name="" id="" />
                        </div>
                    </div>
                    <div className=" py-8">
                        <p className='text-2xl font-semibold text-slate-200 '>Fare : {user.adults *500} <del className='text-sm text-slate-800'>{user.adults * 800}</del></p>
                        <div className="flex justify-center w-[40%] py-10">
                            <button onClick={Handleclick} className='bg-slate-800 text-slate-200 font-semibold px-5 py-2 rounded-lg hover:bg-slate-900'>Click here to proceed</button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Booking