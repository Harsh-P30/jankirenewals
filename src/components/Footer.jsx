import React from 'react'
import { NavLink } from 'react-router'

function Footer() {
  return (

    <div className='sm:flex justify-around items-center py-10 bg-[#333333] px-6'>

      <div id="left">
        <h1 className='font-semibold text-3xl py-3 text-white'>Our Company</h1>

        <div>
          <nav className="flex flex-wrap gap-6 sm:flex-col sm:gap-0">
            <NavLink to="" className="text-l text-gray-300 hover:text-blue-800 px-4 py-2 border rounded-full w-fit sm:border-0 sm:p-0">Home</NavLink>
            <NavLink to="/about" className="text-l text-gray-300 hover:text-blue-800 px-4 py-2 border rounded-full w-fit sm:border-0 sm:p-0">About</NavLink>
            <NavLink to="/product" className="text-l text-gray-300 hover:text-blue-800 px-4 py-2 border rounded-full  w-fit sm:border-0 sm:p-0">Product</NavLink>
            <NavLink to="/contact" className="text-l text-gray-300 hover:text-blue-800 px-4 py-2 border rounded-full  w-fit  sm:border-0 sm:p-0">Contact</NavLink>
          </nav>
        </div>
      </div>



      <div id="middle">
        <h1 className='font-semibold text-3xl py-3 text-white'>Address</h1>
        <p className='text-gray-300'>
          <span className='font-medium'> Corp. Office  </span><br />
          Ground & First Floor, <br /> Plot No 116, <br /> Udyog Kendra 2 Ecotech III, <br /> Greater Noida, Uttar Pradesh 201306
        </p>
      </div>




    </div>

  )
}

export default Footer