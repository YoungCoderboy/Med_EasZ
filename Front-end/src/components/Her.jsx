import React from 'react';
import Typed from 'react-typed';
import a from '../media/1.jpeg'
import Lottie from 'lottie-react'
import hers from '../media/hers.json'

const Her = () => {
  return (
    <div className='flex flex-row bg-[url("./1.jpeg")]'>
        <div >
            <Lottie animationData={hers} className='ml-44'/>
        </div>

        <div>
            <h1 className='text-white text-4xl mt-32 ml-16'><a className="text-5xl">If you get Over-whelmed <br></br>by the the number of options</a><br></br><br></br>We got your back<br></br>get AI based recommendation<br></br>based on your interests<br></br> directly in your email</h1>
        </div>
    </div>
  );
};

export default Her;