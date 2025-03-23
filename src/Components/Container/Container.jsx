import React from "react";
import "../../assets/Styles/App.css"
function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
