import BrandSpeciality from '@/app/Components/BrandSpeciality'
import ContactUs from '@/app/Components/ContactUs'
import Hero from '@/app/Components/Hero'
import Hero2 from '@/app/Components/Hero2'
import NavBar from '@/app/Components/NavBar'
import NewCeramics from '@/app/Components/NewCeramics'
import OurPopularProduct from '@/app/Components/OurPopularProduct'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'

const Home= () => {
  return (
    <div>
      <NavBar/>
      <Navbar2/>
      <Hero/>
      <BrandSpeciality/>
      <NewCeramics/>
      <OurPopularProduct/>
      <ContactUs/>
      <Hero2/>
      <Footer/>
    </div>
  )
}

export default Home

