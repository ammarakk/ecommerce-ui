
import React from "react";

const Navbar2: React.FC = () => {
  return (
    <header className="text-blue-800 body-font">
  
    
          
        <nav className="md:ml-auto md:mr-auto  mb-11 flex flex-wrap items-center text-base justify-center">       
           <a href="#home" className="mr-5 hover:text-gray-900">
            Plant pots
          </a>
          <a href="/productlisting" className="mr-5 hover:text-gray-900">
            Ceramics
          </a>
          <a href="/about" className="mr-5 hover:text-gray-900">
            Tables
          </a>
          <a href="/shoppingcart" className="mr-5 hover:text-gray-900">
            Chairs
          </a>
          <a href="/productlisting" className="mr-5 hover:text-gray-900">
            Crockery
          </a>
          <a href="/footer" className="mr-5 hover:text-gray-900">
            Tableware
          </a>
          <a href="/navbar2" className="mr-5 hover:text-gray-900">
            Cutlery
          </a>
        

  
        </nav>

    </header>
  );
}
export default Navbar2;
