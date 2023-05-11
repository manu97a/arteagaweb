import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  const retroceder = () => {
    navigate(-1);
  };
  const style = { color: "#C2391B", fontSize: "1.5em" };
  return (
    
      <MdArrowBackIos
        size={30}
        style={style}
        onClick={retroceder}
        className="cursor-pointer"
      />
    
  );
};

export default GoBack;
