import React from 'react';
import Typed from 'react-typed';
import a from '../media/1.jpeg'
import Lottie from 'lottie-react'
import mail from '../media/mail.json'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="text-white flex flex-row bg-[#25274d]">     <div className='max-w-[800px] mt-[-96px] w-2/3 h-screen mx-auto text-center flex flex-col justify-center border-white'>
        <p className='text-[#17e9e0] font-bold p-2'>
        YOUR WINDOW TO THE NATION
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
        THE NAME YOU KNOW<br></br> THE NEWS YOU NEED
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>
            Get news in : <br></br>
          </p>
          <Typed
          className='md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['ਪੰਜਾਬੀ','ગુજરાતી','मराठी','తెలుగు','ಕನ್ನಡ','മലയാളം','தமிழ்','ଓଡ଼ିଆ ','বাংলা','অসমীয়া','মণিপুরী']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>We report, you decide</p>
        <Link to="/">
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </Link>
      </div>
      <div className='w-1/3 p-20 mt-4'>
        <Lottie animationData={mail}/>
      </div>
    </div>
  );
};

export default Hero;
