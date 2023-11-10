import React from "react";
import image1 from "../IMAGES/8.png"

function Header() {
  return (
    <>

      <img src={image1} alt="banner" className="w-100"/>
      <div className="container text-white">
        <h1 className="display-4">Flashcard-o-matic</h1>
        <p className="lead">Discover The Flashcard Difference.</p>
      </div>
    
    </>
  );
}

export default Header;
