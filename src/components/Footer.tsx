import React from 'react'
import { FaTwitter, FaLinkedin , FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>

        <h1 className='text-2xl font-bold'>Parth Kashyap</h1>

        <div className='flex space-x-6'>
            <a href="" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a>
            <a href="" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
        </div>
    </div>
  )
}
