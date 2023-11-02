import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='w-screen mx-auto py-16 px-28 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#25274d]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>360* NEWS<br></br>ANALYSIS</h1>
        
        <div className='flex justify-between md:w-[75%] my-6 '>
            
            <a href="https://www.instagram.com/athang_yende84/"><FaInstagram size={40} /></a>
            <a href=""><FaTwitterSquare size={40} /></a>
            <a href="https://github.com/athang12"><FaGithubSquare size={40} /></a>
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 text-center'>
   
    <div>
        <h6 className='font-medium text-gray-400 text-lg' >Support</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="/coming-soon">Documentation</Link></li>
            <li className='py-2 text-sm'><Link to="/coming-soon">Guides</Link></li>
            <li className='py-2 text-sm'><Link to="/about">API Status</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-lg'>Company</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="/about">About</Link></li>
            <li className='py-2 text-sm'><Link to="/coming-soon">Blog</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400 text-lg'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'><Link to="/coming-soon">Claim</Link></li>
            <li className='py-2 text-sm'><Link to="/coming-soon">Policy</Link></li>
            <li className='py-2 text-sm'><Link to="/coming-soon">Terms</Link></li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
