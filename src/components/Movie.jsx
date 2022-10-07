import React from 'react'

const Movie = ({item}) => {
  return (
    <div className='inline-block justify-center relative rounded-[10px] overflow-hidden m-[0.5rem] cursor-pointer min-w-[200px] z-0 ml-4'>
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
  )
}

export default Movie