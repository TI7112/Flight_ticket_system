import React from 'react'
import { TicketView } from '../components/Components'
import Layout from '../components/Layout'
import { tickets } from '../data/tickets'

const BookingHistory = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 pr-44">
        {tickets.map((curElem)=>(
          <TicketView key={curElem.id} data={curElem}/>

        ))}
        </div>
      </Layout>
    </>
  )
}

export default BookingHistory