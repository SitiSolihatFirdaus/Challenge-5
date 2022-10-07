import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const PopularMovie = ({ fetchURL }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

  return (
    <>
        <div className='flex justify-between p-4'>
            <h1 className='font-bold text-3xl'>Popular Movie</h1>
            <Link to='/' className='text-red-600 text-bold flex justify-between hover:text-red-800'>
                Back Home
                <span className='text-red-600 py-1 px-2 text-bold hover:text-red-800'>
                    <i><AiOutlineHome /></i>
                </span>
            </Link>
        </div>

        <div>
            {movies.map((item) => (
                <div className='inline-block justify-center relative rounded-[10px] overflow-hidden m-[0.5rem] cursor-pointer min-w-[200px] z-0 ml-3'>
                <img 
                    className='h-[300px]'
                    src={`https://image.tmdb.org/t/p/original/${item?item.poster_path:''}`} 
                    alt={item?.title}
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 items-center w-full h-full hover:bg-white/80 opacity-0 hover:opacity-100 text-gray-700'>
                    <p className='white-space-normal text-base font-bold flex justify-center items-center h-full'>
                    {item?.title}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default PopularMovie