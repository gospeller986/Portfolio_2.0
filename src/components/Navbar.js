import React from 'react'
import  { useState } from 'react' 


const Navbar = () => {
     
    let Links =[
        {name:"About",link:"/"},
        {name:"Skills",link:"/"},
        {name:"Project",link:"/"},
        {name:"Contact",link:"/"},
      ];
      let [open,setOpen]=useState(false);

  return (
    <div style={{
        
        paddingTop : "1rem" ,
        marginLeft : "4rem" ,
        marginRight : "4rem" 
        


    }} >
         <div className='shadow-md w-full fixed top-0 left-0 mb-10px'>
      <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800'>
        <span className='text-3xl text-white mr-1 pt-2 font-oswald '>
        SATYAJIT
        </span>
        
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
      <h2>☰</h2>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white font-bold hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }

      </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar