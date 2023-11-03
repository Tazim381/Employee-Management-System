import React from "react";
import img from "../assets/about.png";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div animate={{ x: 0 }}
    initial={{ x: -1000 }} 
    exit={{ x: 1000 }} 
    className=" min-h-[70vh] flex flex-col   md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-4xl font-semibold ">
          Employee
          <span className="text-orange-500"> Management</span>
        </h2>
        <p className=" mt-5 text-start">
        An Employee Management System, often referred to as an Employee Management Software or Human
         Resource Management System (HRMS), is a comprehensive software solution or platform used
          by organizations to streamline and automate various HR and employee-related processes.
           This system is designed to help businesses efficiently manage their workforce, 
           including all aspects of employee data, records, and interactions.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className="w-[60vh]">
        <img src={img} alt="img" height='100px'/>
      </div>
    </motion.div>
  );
};

export default Home;