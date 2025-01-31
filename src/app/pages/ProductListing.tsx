import React from 'react'
import AllProducts from "../Components/AllProducts";
import Navbar2 from "../Components/Navbar2";
import NavBar from "../Components/NavBar"
import Footer from '../Components/Footer'



const HomePage = () => {
  return (
    <div>
      
      <NavBar/>
      <Navbar2/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}

export default HomePage

