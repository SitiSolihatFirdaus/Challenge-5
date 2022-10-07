import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { FiPlayCircle } from 'react-icons/fi'
import request from '../Request'

const Row = () => {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    let [filteredData] = useState();
    
    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=> {
        axios.get(request.requestPopular).then((response)=> {
            setMovies(response.data.results)
        })
    }, [])

    const handleSearch = (e) => {
        setSearchMovie(e.target.value);
        if(e.target.value === "") {
            loadMovie();
        } 
    };

    const globalSearch = () => {
        filteredData = movie.filter((value) => {
            return (
                value.item.toLowerCase().includes(searchMovie.toLowerCase())
            );
        });
        setMovies(filteredData); 
    };

    useEffect(() => {
        loadMovie()
    }, []);

    const loadMovie = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0badcefffc03af1c8584bd67dfc87507&language=en-US&page=1`)
        .then((response) => {
            setMovies(response.data.results);
        });
    }; 

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <>
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <h1 className='text-red-600 text-4xl font-bold'>Movielist</h1>

                <label className="relative block">
                    <button 
                        onClick={globalSearch}
                        className='absolute inset-y-0 right-0 flex items-center p-4 text-white text-xl' 
                        type="submit">
                            <i><HiSearch /></i>
                    </button>
                    <input 
                        value={searchMovie}
                        onChange={handleSearch}
                        className='bg-transparent w-[500px] h-[40px] rounded-3xl border-solid border-red-600 border-2 px-4 placeholder:text-white block focus:outline-none focus:border-red-500'
                        placeholder='What do you want to watch?'
                        type="text">
                    </input>
                </label>

            <div>
                <button className='w-[100px] h-[40px] rounded-3xl border-solid border-red-600 border-2 cursor-pointer text-red-600 mr-2'>Login</button>
                <button className='bg-red-600 w-[100px] py-2 rounded-3xl cursor-pointer text-white'>Register</button>
            </div>
        </div>

        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px]'></div>
                <img 
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title} 
                />
                <div className='absolute w-full top-[20%] p-4'>
                    <h1 className='text-3xl md:text-6xl w-[50%] font-bold'>{movie?.title}</h1>
                    <p className='w-[50%] text-white my-4'>{movie?.overview}</p>
                    <button className='flex items-center justify-between bg-red-600 px-4 py-2 my-4 p-4 rounded-3xl cursor-pointer text-white font-bold'>
                        <i className='pr-2'><FiPlayCircle /></i>WATCH TRAILER</button>
                </div>
            </div>
        </div>

        <div className='flex justify-between p-4'>
            <h1 className='font-bold text-3xl'>Popular Movie</h1>
            <Link to='/popular' className='text-red-600 text-bold mr-2 flex justify-between hover:text-red-800'>
                See All Movie
                <span className='text-red-600 py-1 px-2 text-bold hover:text-red-800'>
                    <i><AiOutlineArrowRight /></i>
                </span>
            </Link>
        </div>

        <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft}
                className='bg-gray-600 left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
                size={40} />
            <div id={'slider'} className='flex overflow-x-scroll whitespace-nowrap scroll-smooth space-x-4 scrollbar-hide relative'>
                {movies.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight 
                onClick={slideRight}
                className='bg-gray-600 right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
                size={40} />
        </div>
    </>
  )
}

export default Row