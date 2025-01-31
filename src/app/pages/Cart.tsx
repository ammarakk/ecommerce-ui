
import React from "react";
import Footer from "../Components/Footer";
import BrandSpeciality from "../Components/BrandSpeciality";
import ContactUs from "../Components/ContactUs";
import NavBar from "../Components/NavBar";
import Navbar2 from "../Components/Navbar2";
import NewCeramics from "../Components/NewCeramics";
import ProductPage from "../Components/ProductPage";


const Cart = () => {
    return (
      <div>
        <NavBar/>
        <Navbar2/>
        <ProductPage />
        <NewCeramics/>
        <BrandSpeciality/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  };
  
  export default Cart;