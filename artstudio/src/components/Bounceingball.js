import React from "react";
import {motion} from "framer-motion";

const ballStyle = {
    display: 'block',
    wiidth: '1rem',
    height: '1rem',
    backgroundColor: 'black',
    borderRadius: '0.5rem'
}

const bounceTransition = {
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut"
    }
}


export default function Bounceingball() {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justificationContent: "space-around",
      }}
    >
    <motion.span style={ballStyle} transition={bounceTransition} animate/>
    </div>
  );
}

// come back to this yt: coding wih seth, creat a loading animation in React(Framer motion)
