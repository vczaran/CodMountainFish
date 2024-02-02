import React from 'react';
import { useNavigate } from "react-router-dom";

const BookButton = () => {
  let navigate = useNavigate();


  return (
  <div className="h-10 buttonContainer">
    <button 
      onClick={() => navigate('/availability')}
      className="
        bg-vuejs-400 
        hover:bg-vuejs-200 
        text-white 
        font-bold 
        py-2 
        px-4 
        rounded-md"
    >
      Book
    
    </button>
  </div>
  )
}

export default BookButton;