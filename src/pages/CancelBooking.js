import React, { useState } from 'react'
import Layout from '../components/Layout'
import { tickets } from '../data/tickets'

const CancelBooking = () => {

const [ticketid,setTicketid] = useState('')
const [data , setData] = useState()

const HandleClick = () =>{
  setData(tickets.filter(curElem => curElem.ticket === ticketid))
}
const handleDelete = () =>{
  tickets = tickets.filter(curElem => curElem.ticket !== ticketid)
  console.log(tickets)
}

const TicketView = ({ data }) => {
  return (
      <>
              <div className="relative bg-slate-500 text-slate-200 hover:text-black duration-300 p-5 hover:bg-slate-400 border-2 border-slate-400 hover:border-slate-300 h-60 rounded-xl">
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
                  <div className="absolute right-6 bottom-5">
                    <button onClick={handleDelete} className='text-lg font-serif font-semibold hover:bg-red-700 bg-red-600 rounded-xl px-10 py-1'>Cancel</button>
                  </div>
              </div>
      </>
  )
}

  return (
    <>
      <Layout>
        <div className="p-5 flex gap-20">
          <div className="bg-slate-500 flex flex-col w-96 p-5">
            <p className='font-semibold font-serif text-xl py-2'>Enter your Ticket Id</p>
            <input value={ticketid} onChange={(e)=>{setTicketid(+e.target.value)}} className='bg-slate-300 focus:bg-slate-200 outline-none px-2 py-1' type="text" name="" id="" />
            <div className="py-4">
              <button onClick={HandleClick} className='bg-slate-600 font-semibold text-white px-4 py-1 rounded-xl'>Validate</button>
            </div>
          </div>
          {data ? <div className="w-full bg-slate-500 rounded-xl">
            {data.map((curElem , index)=>(
              <TicketView key={index} data={curElem}/>))}
          </div> : ''}
        </div>
      </Layout>
    </>
  )
}

export default CancelBooking