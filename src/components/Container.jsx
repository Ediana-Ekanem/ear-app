import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[600px]  md:max-w-[1400px] mx-auto ">{children}</div>
  );
};

export default Container;
