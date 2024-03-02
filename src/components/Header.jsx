import React from "react";
import googleBtn from "../assets/headerAssest/googleBtn.png";
import isoBtn from "../assets/headerAssest/iosBtn.png";
import arrowDown from "../assets/headerAssest/arrow-down-circle.png";
import phoneGroup from "../assets/headerAssest/phoneGroup.png";
import phoneCenterSm from "../assets/headerAssest/phone.png";
import Container from "./Container";

const Header = () => {
  return (
    <section id="home">
      <div className=" bg-[#029f58]  relative z-10">
        <Container>
          <div
            className="py-10 md:py-0 text-white "
            style={{ fontFamily: "DM Sans", zIndex: "0" }}
          >
            <div className="mx-auto max-w-[700px] w-full py-10 ">
              <h1 className=" text-[32px] md:text-[100px] font-[500] md:font-[700] leading-[1] md:leading-[1] text-center ">
                Build direct, meaningful connections.
              </h1>
              <div className=" mt-5 max-w-[400px]  md:max-w-[520px] w-full mx-auto px-5 md:px-0">
                <p className=" text-center  text-[15px] md:text-[18px]  ">
                  Ear1 helps you connect directly with your favourite
                  influencers for a small fee. What’s more? We assure you of
                  getting a reply.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <div className=" md:flex space-y-5 md:space-y-0  md:md:space-x-5">
                <div>
                  <img src={googleBtn} alt="" className="w-40" />
                </div>
                <div>
                  <img src={isoBtn} alt="" className="w-40" />
                </div>
              </div>
            </div>
            <div className="hidden  md:block md:w-10 md:relative  md:left-[1200px]  md:bottom-[105px] ">
              <img src={arrowDown} alt="" className="w-full" />
            </div>
            <div className=" hidden md:block ">
              <div className="flex justify-center">
                <img src={phoneGroup} alt="" />
              </div>
            </div>

            <div className=" flex justify-center">
              <div className="md:hidden relative top-[40px] right-[20px] w-[350px]  ">
                <img
                  src={phoneCenterSm}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Header;
