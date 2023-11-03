import React from "react";
import img from "../assets/manager.png";
import Button from "../layout/Button";
import { motion } from "framer-motion";


import { Link } from "react-scroll";

const About = () => {
  return (
    <motion.div animate={{ x: 0 }}
    initial={{ x: 1000 }} 
    exit={{ x: -1000 }} 
    className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
      <h2 className=" text-4xl font-semibold">
          About
          <span className="text-orange-500"> Us</span>
        </h2>
        <p className="text-start">
        At employee management system, we're dedicated to simplifying employee management. 
        Our user-friendly system streamlines HR processes, fosters growth, 
        and enhances efficiency. We believe in the power of technology to 
        transform HR and support both employers and employees.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </motion.div>
  );
};

export default About;