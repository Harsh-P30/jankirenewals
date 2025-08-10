import React from 'react'
import cover from '../../public/banner.jpeg'
import { NavLink } from 'react-router'
import { GiBookPile } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimonial from '../components/Testimonial';
import Power from '../../public/power.jpeg'
import { PiCarBatteryFill } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import ProductPreview from '../components/ProductPreview';
import ServicesGrid from '../components/ServicesGrid';
import Battery from '../assets/battery.png'





function HomePage() {
  return (

    <div id="home">

      <section
        className="sm:h-screen h-fit bg-cover bg-center text-white py-16 text-center flex items-center"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundSize: 'fit',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-around items-center sm:py-10">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold ">
              Powering a Brighter, Greener <span className='underline'>Future</span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Cutting-edge Solar Inverters, Batteries & Energy Solutions for Every Need.
            </p>

          </div>



          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">

            <NavLink
              to="/product"
              className="bg-yellow-500 hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded-full">
              Explore Products
            </NavLink>


            <NavLink
              to="/contact"
              className="text-white bg-green-500 border-black hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-full shadow-[2px_2px_30px_black]">
              Get a Free Quote
            </NavLink>

          </div>

        </div>
      </section>

      <section id='about' className='py-12 px-12 bg-green-50'>

        <div className="px-4 py-1 border rounded-xl flex gap-2 items-center w-fit"> <GiBookPile />ABOUT US</div>
        <div className='flex flex-col lg:flex-row gap-6 justify-between my-6'>

          <h1 className='text-4xl md:text-6xl font-bold '>Renewable <span className='text-green-600'>Energy Service</span> <br /> For Better Tomorrow </h1>

          <p className='lg:w-1/3 text-justify'>Janaki Renewable, established in 2024, specializes in comprehensive energy storage and inverter solutions for both residential and commercial applications. With a deep understanding of renewable energy systems, we are committed to delivering innovative, reliable, and sustainable energy solutions that empower homes and businesses to embrace clean power.
          </p>

        </div>
        <NavLink
          to="/about"
          className="text-white bg-green-400 border-black hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-full shadow-[0px_0px_10px_green] flex w-fit items-center gap-6">
          Read More <FaArrowRightLong className='hover:-rotate-45 text-xl' />
        </NavLink>


      </section>


      <section className="h-120  text-white py-16 text-center flex flex-col md:flex-row items-center px-6 mx-6 rounded-2xl relative"
        style={{
          backgroundImage: `url(${Power})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>

        <div className='flex flex-col  items-center bg-white text-black px-4 py-2 rounded-xl absolute top-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl'>
          <PiCarBatteryFill className='text-green-500 text-7xl' />
          <h1 className='text-sm' > <span className='text-xl font-bold'> 100+ Install</span> <br /> Complete</h1>
        </div>

        <div className='flex flex-col items-center bg-white text-black px-4 py-2 rounded-xl absolute bottom-6 md:right-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl'>
          <BiWorld className='text-blue-400 text-7xl' />
          <h1 className='text-sm' > <span className='text-xl font-bold'> Established in</span> <br /> 2024</h1>
        </div>


      </section>

      <ProductPreview />

      <section id='Our Services' className='pb-26'>
        <h1 className="text-3xl font-semibold mb-10 text-center">Our Services</h1>
        <ServicesGrid />

      </section>


      <Testimonial />


      <section id='contact'>
        <div className='bg-center bg-cover bg-no-repeat flex flex-col items-center gap-11 justify-center py-26'
          style={{
            backgroundImage: `url(${Battery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='text-center'>
            <h1 className='text-2xl font-bold text-white'>YOUR COMPLETE SOLUTION FOR SMART, RELIABLE </h1>
            <h1 className='text-2xl font-bold text-green-400'>  SOLAR ENERGY SYSTEMS</h1>

          </div>

          <NavLink to={'/contact'} className="text-white text-l bg-green-500 border-black hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-full">
            Contact
          </NavLink>
        </div>


      </section>

    </div>




  )
}

export default HomePage


