import React from 'react'
import About_Img from '../../public/about.jpg'
import Battery_energy from '../../public/Battery-energy.webp'

function About() {
  return (
    <div>

      <div className='bg-green-50 py-16'>
        <h1 className="text-4xl font-bold text-center mb-2">About Us</h1>

        <div className='flex flex-col lg:flex-row items-start justify-around p-6 gap-6'>

          <div className='lg:w-1/2 p-6 h-80 rounded-2xl'
            style={{
              backgroundImage: `url(${About_Img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
            <h1 className='text-4xl sm:text-5xl font-bold '>We are renewable <span className='text-green-600'>Energy Service</span>  For Better Tomorrow </h1>
          </div>

          <div className='lg:w-1/3 text-justify'>
            Founded in 2024, Janaki Renewable is a forward-thinking company specializing in cutting-edge energy storage and inverter solutions tailored for both residential and commercial applications. With a strong foundation in the principles and practices of renewable energy systems, we are dedicated to accelerating the global transition toward sustainable power.
            <br />
            <br />
            At Janaki Renewable, we recognize the growing demand for cleaner, more efficient energy alternatives. Our solutions are engineered to seamlessly integrate with solar, wind, and other renewable sources—enhancing energy independence, reducing carbon footprints, and ensuring power reliability.
          </div>

        </div>
      </div>


      <div
        className="flex flex-col md:flex-row h-screen justify-around w-full  bg-bottom bg-cover bg-no-repeat px-6 py-10 opacity-90"
        style={{ backgroundImage: `url(${Battery_energy})` }}
      >

        <div className='flex text-white items-start '>
          <div className='flex items-end'>
            <p className='text-6xl font-bold'>1</p>
            <p className='text-xl'>Safaty For the <br />environment.</p>
          </div>
        </div>



        <div className='flex text-white items-center '>
          <div className='flex items-end'>
            <p className='text-6xl font-bold'>2</p>
            <p className='text-xl'>Availability for an <br />energy source.</p>
          </div>
        </div>



        <div className='flex text-white items-end '>
          <div className='flex items-end'>
            <p className='text-6xl font-bold'>3</p>
            <p className='text-xl'>Inexhaustibility of <br />the energy source.</p>
          </div>
        </div>


      </div>


      <div className='bg-green-50 p-16 text-right '>
            <p className='text-6xl font-bold text-green-600'>Our Future</p>
            <p className='text-6xl font-bold text-gray-300'>Inverors , Battery <br />
            </p>
      </div>
    </div>
  )
}

export default About