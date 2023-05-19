import React from "react";
import "./Skills.css";
import react_logo from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import nodejs from "../assets/nodejs.webp";
import mongodb from "../assets/mongo.png";
import expressjs from "../assets/express.png";
import docker from "../assets/docker.png";
import kafka from "../assets/kafka.png";
import kube from "../assets/kube.png";
import pyt from "../assets/python.png";
import postman from "../assets/postman.png";
import cpp from "../assets/cpp.png";
import firebase from "../assets/firebase.png";
import stripe from "../assets/stripe.png";
import razorpay from "../assets/razorpay.png";
import jenkins from "../assets/jenkins.png";
import github from "../assets/github.png";
import hcj from "../assets/html.png";
import flask from "../assets/flask.png";
import TextShpere from "../components/TextSphere";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Skills = () => {
  return (
    <div style={{ minHeight: "155vh"}} >
      <div className="h-screen flex flex-col text-center  space-y-10 md:space-y-0 md:space-x-16  my-2 mx-5 md:mx-0 md:my-0 ">
        <div className=" font-bold  text-center ">
          <h1 className="text-6xl text-yellow-400 font-oswald mb-5 md:ml-20  ">
            Skills
          </h1>
          <p className=" text-center text-gray-500 ml-7" >Skilled & proficient software developer 
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center" > 

        <div>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_2glqweqs.json"
            style={{ height: "300px", width: "300px"}}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>
        {/* <div className=" justify-center items-center pl-10">
          <TextShpere />
        </div> */}

        </div>

        {/* <div className=" hover:animate-pulse">
          <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"
            style={{ height: "300px", width: "300px" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div> */}
      <div class="logos">
      <div class="logos-slide">
            <img src={react_logo} alt="xyz"/>
            <img src={docker} alt="xyz"/>
            <img src={mongodb} alt="xyz"/>
            <img src={expressjs} alt="xyz"/>
            <img src={jenkins} alt="xyz"/>
            <img src={kafka} alt="xyz"/>
            <img src={postman} alt="xyz"/>
            <img src={firebase} alt="xyz"/>
            <img src={stripe} alt="xyz"/>
            <img src={razorpay} alt="xyz"/>
      </div>
    </div>

    <div class="logos">
      <div class="logos-slide_1">
            <img src={stripe} alt="xyz"/>
            <img src={razorpay} alt="xyz"/>
            <img src={cpp} alt="xyz"/>
            <img src={hcj} alt="xyz"/>
            <img src={pyt} alt="xyz"/>
            <img src={kube} alt="xyz"/>
            <img src={github} alt="xyz"/>
            <img src={flask} alt="xyz"/>
            <img src={reactNative} alt="xyz"/>
            <img src={nodejs} alt="xyz"/>

      </div>
    </div>



      </div>
    </div>
  );
};

export default Skills;
