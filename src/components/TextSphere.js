import React, { useEffect } from "react";
import '../components/TextSphere.css' ; 


import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "React-Native",
        "JavaScript",
        "React",
        "ExpressJS",
        "NodeJS",
        "MongoDb",
        "Docker",
        "Kubernetes",

      ];

      const options = {
        radius: 150,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <> 
      <div className="main">

      
      <div   className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span  className="tagcloud"></span>
      </div>
      </div>
    </>
  );
};

export default TextShpere;