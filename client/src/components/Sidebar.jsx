import React from "react";
import { AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi"
import { IoMdPersonAdd } from "react-icons/io"
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const variants = {
  open: { opacity: 1, x: -90 },
  closed: { opacity: 1, x: "100%", transition: { duration: 0.01 } },
};

const Sidebar = ({ isSidebar, handleLogout }) => {

  const logout = () => {
    handleLogout()
  }

  return (
    <motion.div
      animate={isSidebar ? "open" : "closed"}
      variants={variants}
      className={`h-100 w-56 mt-4 shadow-md  dark:bg-gray-900 fixed text-gray-100
      }`}
    >
      <div className="flex flex-col gap-5 p-5 mt-10 ">
        <div className="flex items-center gap-2">
          <AiOutlineUser className=" text-2xl " />{" "}
          <button className="font-semibold">Profile</button>
        </div>
        <div className="flex items-center gap-2">
          <BiSolidDashboard className=" text-2xl " />{" "}
          <Link to="/dashboard" className="font-semibold ">Dashboard</Link>
        </div>
        <div className="flex items-center gap-2">
          <IoMdPersonAdd className=" text-2xl " />{" "}
          <Link to="/addEmployee" className="font-semibold">Add Employee</Link>
        </div>
        <div className="flex items-center gap-2">
          <IoMdExit className=" text-2xl " />{" "}
          <button className="font-semibold" onClick={logout}>Logout</button>
        </div>

      </div>
    </motion.div>
  );
};

export default Sidebar;
