import React from 'react'
import  { useState , useEffect } from 'react' 


const Navbar = () => {

  const [colorChange, setColorchange] = useState(false);
  
  useEffect(() => {
    const changeNavbarColor = () =>{
      if(window.scrollY >= 80){
        setColorchange(true);
      }
      else{
        setColorchange(false);
      }
   };
   document.addEventListener('scroll', changeNavbarColor);
  
    return () => {
      document.removeEventListener('scroll' ,changeNavbarColor) ;
    }
  }, [])
  


     
    let Links =[
        {name:"About",link:"#app"},
        {name:"Skills",link:"#skills"},
        {name:"Project",link:"#project"},
        {name:"Contact",link:"#contact"},
      ];
      let [open,setOpen]=useState(false);

  return (
    <div  style={{
        
        paddingTop : "1rem" ,
        marginLeft : "4rem" ,
        marginRight : "4rem" ,
        zIndex: 10 ,
        
        


    }} >
         <div style={{ background : colorChange ? '#0d1116' : '*'  }} className='shadow-md w-full fixed top-0 left-0 mb-10px scroll-smooth'>
      <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7 bg-[#0d1116] md:bg-[*]'>
      <div className='font-bold text-2xl cursor-pointer flex items-center  
      text-gray-800'>
        <span className='text-3xl text-white mr-1 pt-2 font-oswald '>
        SATYAJIT
        </span>
        
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden bg-[#0d1116] '>
      <h2>☰</h2>
      </div>

      <ul className={` bg-[#0d1116] md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
        { 
        
          Links.map((link)=>(
            <li key={link.name} className='ml-0 md:ml-8 text-xl md:my-0  bg-[#0d1116] md:bg-[*]  py-10  md:py-0 z-40 text-center'>
              <a href={link.link} className='text-white font-bold hover:text-gray-400 duration-500 bg-[#0d1116] md:bg-[*] z-40'>{link.name}</a>
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