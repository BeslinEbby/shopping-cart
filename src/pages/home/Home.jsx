import React from 'react'
import Hero from '../../components/hero/Hero'
import LatestProducts from '../../components/latestProducts/LatestProducts'
import './Home.css'
import OurPolicy from '../../components/ourPolicy/OurPolicy'


const Home = () => {
  return (
    <section className='home'>
      <Hero/>
      <LatestProducts/>
      <OurPolicy/>
    </section>
  )
}

export default Home