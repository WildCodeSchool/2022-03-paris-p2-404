import React from 'react'
import { useState } from "react";
import "./FormPost.css"

const FormPost = () => {

    const [post, setPost] = useState("");
 
    const handleChange =(e)=>{
        setPost(e.target.value);
      }

    return (
        <div className="relative mt-20 ">
            <div className='bg-color-winter-hover-desktop-header mx-10 p-6 rounded-lg shadow-lg shadow-black'>
       <form className="flex flex-col items-center align-middle opcity-100">
           <h2 className='font-[font-standard] text-lg mb-2'>How do you feel today ?</h2>
               <label className='flex flex-col items-center'>
               <input className='flex mb-2 p-3 border-solid border-2 border-black rounded-lg'
               type="text" value={post} onChange={(e) => {handleChange(e)}} />
               <input type="submit" value="Publish" className=' bg-blue-500 p-2 rounded-lg hover:bg-white'/>
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

