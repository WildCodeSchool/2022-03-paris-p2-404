import React from 'react'
import { useState } from "react";
import "./FormPost.css"

const FormPost = ({isVisible, setIsVisible}) => {
    
    
    const toggleVisible = () => setIsVisible(!isVisible);

    return (
      
        <div className="relative mt-20 ">
            <div className=' relative bg-color-winter-primary mx-10 p-6 rounded-lg shadow-lg shadow-black'>  
       <form className="flex flex-col items-center align-middle opcity-100">
                <h2 className='font-[font-standard] text-lg mb-2'>How do you feel today ?</h2>
               <label className='flex flex-col items-center'>
               <input className='flex mb-2 p-3 border-solid border-2 border-black rounded-lg'
               type="text"  />
               <button onClick={toggleVisible} type="button" className='font-[font-got] p-2 border border-1 border-black bg-color-winter-button rounded-lg focus:bg-color-winter-header focus:text-color-font-light shadow-md shadow-color-font-dark focus:transition-shadow focus:shadow-sm focus:shadow-color-font-dark'>
               <p>Publish</p>
               </button>
               </label> 
       </form> 
            </div>  
       </div>

        )};

export default FormPost








// {
//     return (
//       <div className="popup-box">
//         <div className="box">
//           <span className="close-icon" onClick={props.handleClose}>x</span>
//           {props.content}
//         </div>
//       </div>
//     );
//   };

