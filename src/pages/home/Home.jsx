import React from 'react'
import Hero from '../../components/hero/Hero'
import LatestProducts from '../../components/latestProducts/LatestProducts'
import './Home.css'


const Home = () => {
  return (
    <section className='home'>
      <Hero/>
      <LatestProducts/>
    </section>
  )
}

export default Home