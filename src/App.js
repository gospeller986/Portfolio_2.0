import './App.css';
import bg from './assets/bg.webp'
import Navbar from './components/Navbar';
import About from './pages/About';
import header_img from './assets/header-img.svg'
import Skills from './pages/Skills';



function App() {
  return (
    <div className="App" 
      style={{
         backgroundImage : `url(${bg})` , 
         backgroundRepeat : "no-repeat",
         backgroundSize : "cover"
      }}
    >

     <Navbar/>
     <div className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 md:mt-20 p-20  '  >
      <div className=' font-bold  md:w-1/3 max-w-sm'  >
          <h1 className='text-white font-oswald text-4xl '>Exploring what's above and beyond ... <br/> 
          I'm <span className='text-yellow-300' >Satyajit </span>  
          </h1>

          <p className='font-thin' style={{marginTop : 40 , color : "#D6DBDF" , opacity : 0.80 }}>
           Fueled by passion for designing and implementing scalable products . I have a <br/> deep desire to excel and continously improve 
           my skills . 
         </p> 
         <div>
              <button className='text-white border-2 py-2 px-4 mt-5'>Resume</button>
              <button className='text-white border-2 py-2 px-4 mt-5 mx-2 md:mx-4' > Hire Me </button>
         </div>
         

      </div>

      <div className=' md:ml-20 md:mt-10 md:w-1/3 max-w-sm ' id="breathing-button">
           <img src={header_img}  /> 
      </div>
     </div>

    <Skills/>

    </div>
  );
}

export default App;
