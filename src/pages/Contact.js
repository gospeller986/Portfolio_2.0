import React from "react";
import contact from "../assets/contact-img.svg";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full  min-h-[150vh]  h-screen  justify-center items-center ">
        {/* <div className="wrapper flex justify-center  py-16   md:gap-52 lg:py-12  ">
          <div className="imgbox  md:visible lg: visible">
            <img className="w-[550px] h-full" src={contact} alt="" />
          </div>
          <div id='main' className="content-box mx-4 px-6 ">
            <h1 className="text-white font-bold text-4xl mb-8 text-center">Get In Touch</h1>
            <form action="" className="flex flex-col pr-10 pl-10 ">
            <div className="flex gap-2 " >
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  "
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white "
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-2  py-4  ">
              <input
                className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  "
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4  text-white placeholder-white  "
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white  placeholder-white pt-2"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>
                <button className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ">Send</button>
                </form>
          </div>

 
        </div> */} 
        <div className="flex  flex-col md:flex-row justify-center items-center align-middle gap-0 md:gap-50 mt-[180px]  ">
        <div className="imgbox px-5 my-2  items-center justify-center ">
           <img className=" w-[250px] h-full" src={contact} alt="xyz" />
        </div>

        <div className="flex flex-col px-5 justify-center items-center   "> 
          <h1 className=" text-white text-6xl text-center font-oswald font-bold my-3 mb-4">Contact Me</h1>
          <div className="flex flex-col md:flex-row bg-transparent mx-8 gap-1 ">
            <input
              className="bg-transparent py-2 border-[1px] border-white rounded-lg mb-2 mt-2 text-white placeholder-white px-8 pl-4"
              placeholder="First Name"
            />
            <input
              className="bg-transparent py-2 border-[1px] border-white rounded-lg mb-2 mt-2 text-white placeholder-white px-8 pl-4"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col md:flex-row bg-transparent mx-8 gap-1">
            <input
              className="bg-transparent py-2 border-[1px] border-white rounded-lg mb-2 mt-2 text-white placeholder-white px-8 pl-4"
              placeholder="Email"
            />
            <input
              className="bg-transparent py-2 border-[1px] border-white rounded-lg mb-2 mt-2 text-white placeholder-white px-8 pl-4"
              placeholder="Mobile"
            />
          </div>

          <div className="bg-transparent mx-8">
            <textarea
              className=" rounded-2xl border-[1px] border-white bg-transparent pl-4 pt-3 text-white placeholder-white "
              rows={5}
              cols={30}
              placeholder="Message"
            />
          </div>

          <div className="bg-transparent mx-8">
            <button className="bg-white border-black rounded-lg font-bold px-8 py-1 mb-4 ">
              Send
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
