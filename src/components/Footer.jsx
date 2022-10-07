import React from 'react'
import { MdMovieFilter } from 'react-icons/md'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[100px] bg-gray-400 mt-[100px] bg-gradient-to-r from-black'>
            <div className='flex items-center justify-center text-4xl text-bold text-red-600 py-4'>
                <i className='text-red-600 px-2'><MdMovieFilter /></i>Movielist</div>
            <p className='text-center text-white'>2022</p>
        </div>
    </>
  )
}

export default Footer