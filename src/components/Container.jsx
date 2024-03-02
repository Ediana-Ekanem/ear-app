import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[600px]  md:max-w-[1400px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
