import React from "react";
import { useNavigate } from "react-router-dom";

function Nopage() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Page not Found</h1>
      <button onClick={()=>navigate('/')}>Home</button>
    </div>
  );
}

export default Nopage;
