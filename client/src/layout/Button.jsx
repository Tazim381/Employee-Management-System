import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" bg-orange-500 text-white py-2 px-5 rounded-full mt-4 hover:shadow-[0_3px_10px_rgb(0,0,0,0.8)] hover:bg-brightGreen hover:text-white transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;