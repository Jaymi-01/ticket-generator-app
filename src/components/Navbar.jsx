import React from 'react'
import ticket from '../assets/ticket.svg';
import ticz from '../assets/ticz.svg'

const Navbar = () => {
  return (
    <div className='relative bg-header p-5 rounded-2xl backdrop-blur-md mx-5 md:mx-30 mt-6 text-white border border-border font-header text-xl'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
           <img className=' px-2 py-1.5 border border-border rounded-xl mr-3 ' src={ticket} alt="" />
          <img src={ticz} alt="" />
        </div>
        <div className='hidden md:flex '>
          <div className='mx-8'>
            <a href="#">Events</a>
          </div>
          <div className='mx-8'>
            <a href="#">My Tickets</a>
          </div>
          <div className='mx-8'>
            <a href="#">About Project</a>
          </div>
        </div>
        <button className='px-6 py-4 md:px-6 md:py-4 bg-white rounded-2xl text-black  cursor-pointer'>My Ticket</button>
      </div>
    </div>
  )
}

export default Navbar