import React from "react";
import img from "../assets/contact.png";
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div animate={{ x: 0 }}
    initial={{ x: -200 }} 
    exit={{ x: 200 }} 
    className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10 gap-10">
       <h2 className=" text-4xl font-semibold ">
          Contact
          <span className="text-orange-500"> Us</span>
        </h2>
      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form className=" w-full md:w-2/5 space-y-5 pt-20 border-2 border-orange-500 p-10 rounded"
        action="https://formspree.io/f/myyqvjyk"
        method="POST">
          <div className=" flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Your Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userNumber">Your Comment</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userComment"
              id="userComment"
              placeholder="enter your number"
            />
          </div>

          <div className=" flex flex-row justify-center  bg-orange-500 text-white py-2 px-5 rounded-full mt-5 hover:shadow-[0_3px_10px_rgb(0,0,0,0.8)] hover:bg-brightGreen hover:text-white transition-all">
            <button type="submit">Send Message</button>
          </div>
        </form>

        <div className=" w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;