import React from 'react'
import PopularMovie from '../components/PopularMovie'
import request from '../Request'

const PopularList = () => {
  return (
    <>
        <PopularMovie fetchURL={request.requestPopular} />
    </>
  )
}

export default PopularList