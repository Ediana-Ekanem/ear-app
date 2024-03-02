import React from "react";
import Container from "./Container";
import zizagFull from "../assets/fansIcons/fans.png";
import zizaghalf from "../assets/fansIcons/zizzag.png";
import backgroundImage from "../assets/fansImg/bgImg.png";
import groupDesktop from "../assets/fansImg/groupDesktop.png";
import groupMobile from "../assets/fansImg/groupMobile.png";

const Fans = () => {
  return (
    <section id="fans">
      <div
        className=" py-16 md:py-0  relative md:h-[500px] bg-gray-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Container className="h-full flex items-center justify-center md:justify-start">
          <div className=" px-5 relative z-20 max-w-sm md:max-w-none">
            <div className=" max-w-[310px] md:max-w-[500px]  w-full  ">
              <h2 className="text-[#007640] text-[32px] md:text-[62px]  md:text-start leading-[1]  font-[500]">
                What can Ear1 help you do?
              </h2>
            </div>

            <div className=" max-w-[300px]  md:max-w-[530px] mt-10 w-full ">
              <p className="font-[400] text-[15px] md:text-[18px] text-[#000000] ">
                Are you an individual looking to connect with an influencer
                without the hassle of waiting for the reply over a long time, or
                an influencer looking to filter your dm’s and connect with your
                audience, Ear1 has got you covered.
              </p>
            </div>
          </div>

          {/* <div> */}
          <div className="hidden md:block max-w-lg absolute right-[1%] top-0 z-10">
            <img
              src={zizagFull}
              alt=""
              className="w-full h-full object-cover  "
            />
          </div>

          <div className="md:hidden max-w-md w-[32%] absolute  right-[0.2%] top-8  z-10">
            <img
              src={zizaghalf}
              alt=""
              className="w-full h-full object-cover  "
            />
          </div>
          {/* </div>  */}
        </Container>
      </div>

      <div className="bg-[#ffffff] py-14">
        <Container>
          <div className=" flex flex-col md:flex-row items-center  md:justify-around ">
            <div className="max-w-[330px] md:max-w-[500px] w-full px-5 order-2 md:order-1 ">
              <button className=" hidden md:block rounded-xl bg-[#FFBB62] font-[500] px-5 mb-3">
                Fans
              </button>
              <div className=" max-w-[300px] md:max-w-[500px] w-full mt-10">
                <h1 className="text-[32px] md:text-[62px] font-[500] leading-[1] md:leading-[1]">
                  Connect with top influencers in your field
                </h1>
              </div>
              <div className="max-w-[400px] w-full mt-7">
                <p className="text-[15px] md:text-[18px] text-[#000000]">
                  From Tech to music to business, Ear1 has a wide range of
                  industry experts in diverse fields you have always wanted to
                  connect with. Now is your best chance.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 ">
              <div className=" hidden md:block ">
                <img src={groupDesktop} alt="" />
              </div>
              <div className="  md:hidden ">
                <img src={groupMobile} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Fans;
