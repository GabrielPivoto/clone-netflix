import React from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type = "movie"/>
      
    </div>
  )
}

export default Home
