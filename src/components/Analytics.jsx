import React from 'react';

import Lottie from 'lottie-react'
import pl from '../media/pl.json'

const Analytics = () => {
  return (
    <div className='bg-[url("./1.jpeg")]'>
    <div className='flex flex-row'>
    <div>
      <Lottie animationData={pl} className='ml-60 w-96 h-96 border-white  '/>
      </div>
      <div className='text-white text-8xl text-center border-white  w-1/2 pr-24 pt-20'>
        Discover<br></br>Yourself !
      </div>

    </div>
    <div className='w-full bg-white py-16 px-4 text-white  flex flex-row text-center bg-[url("./1.jpeg")]'>
      <div className='w-1/3 ml-16 '>
        <h2 className='text-3xl font-bold'>Customised</h2>
        <p className='text-lg'><br></br>The newsletter you get <br></br>would be according to your<br></br> selected interests</p>
      </div>

      <div className='w-1/3 '>
        <h2 className='text-3xl font-bold'>Easy to access</h2>
        <p className='text-lg'><br></br>We search the <br></br>best papers for you <br></br>so that you wont have to </p>
      </div>

      <div className='w-1/3  mr-16'>
      <h2 className='text-3xl font-bold'>Over 295M+ papers</h2>
      <p className='text-lg'><br></br>We have a <br></br>database this LARGE !</p>
      </div>
    </div>
    </div>
  );
};

export default Analytics;
