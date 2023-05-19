import "./App.css";
import bg from "./assets/bg.webp";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import header_img from "./assets/header-img.svg";
import Skills from "./pages/Skills";
import Footer from "./pages/Footer";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div
        className="App"
        id="app"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div
          class="main"
          className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-1 mt-40 pt-10 md:mx-0 md:my-0 md:mt-20 p-10  sm:mt-20 "
        >
          <div className=" font-bold  md:w-1/3 max-w-sm">
            <h1 className="text-white font-oswald text-4xl ">
              Exploring what's above and beyond ... <br />
              I'm <span className="text-yellow-300">Satyajit </span>
            </h1>

            <p
              className="font-thin"
              style={{ marginTop: 40, color: "#D6DBDF"}}
            >
              Fueled by passion for designing and implementing scalable products
              . I have a <br /> deep desire to excel and continously improve my
              skills .
            </p>
            <div className="flex flex-col md:flex-row ">
              <button
                target="_blank"
                onClick={() => {
                  window.location.href =
                    "https://drive.google.com/file/d/1UeOlN9BrDtJoRADFwXGNbfLw-iReB89x/view?usp=sharing";
                }}
                className="text-white border-2 py-2 px-4 mt-5 hover:text-black hover:bg-white"
              >
                Resume
              </button>
              <button
                target="_blank"
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/satyajit-pal-a435441ba/";
                }}
                className="text-white border-2 py-2 px-4 mt-5 mx-2 md:mx-4 hover:text-black hover:bg-white"
              >
                {" "}
                Let's Connect{" "}
              </button>
            </div>
          </div>

          <div
            className=" md:ml-20 md:mt-10 md:w-1/3 max-w-sm  "
            id="breathing-button"
          >
            <img src={header_img} style={{ zIndex : 2}} />
          </div>
        </div>
      </div>

      <div
        id="skills"
        className=" overflow-hidden min-h-fit flex flex-col md:space-y-0  items-center    md:mx-0 md:my-0    sm:mt-20 bg-[#0d1116] "
      >
        <Skills />
      </div>
      <div
        id="project"
        className=" overflow-hidden min-h-fit flex flex-col md:space-y-0  items-center    md:mx-0 md:my-0    sm:mt-20 bg-[#0d1116] "
      >
        <Project />
      </div>
      <div
        id="contact"
        className=" overflow-hidden min-h-fit flex flex-col md:space-y-0  items-center    md:mx-0 md:my-0    sm:mt-20  "
      >
        <Contact />
      </div>

      <Footer className="overflow-hidden" />
    </>
  );
}

export default App;
