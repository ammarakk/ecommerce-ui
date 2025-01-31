
import React from "react";
import ContactUs from "../Components/ContactUs";
import BrandSpeciality from "../Components/BrandSpeciality";
import ProductDetail from "../Components/ProductDetail";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Navbar2 from "../Components/Navbar2";



const About = () => {
    return (
      <div>
        <NavBar/>
        <Navbar2/>
        <ProductDetail/>
        <BrandSpeciality/>
        <ContactUs/>
      <Footer/>
      </div>
    );
  };
  
  export default About;