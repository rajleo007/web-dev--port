import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Heroimage from '../assets/image/heroimage.jpg'
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Full Stack Web Developer</h2>
          <p className='text-gray-500 py-4 max-w-md '>Currently, I love to work on web applications using technologies like React, Tailwind, Node.js, and Express.js</p>
          <div>
            <Link to="portfolio" 
            smooth
            duration={500}

            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 '>
                <MdKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={Heroimage} alt="Hero" className='rounded 2xl mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  );
}

export default Home;