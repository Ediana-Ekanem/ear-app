import React from "react";
import phone from "../assets/feature/phone.png";
import arrowUp from "../assets/feature/logo (12).png";
import phoneCase from "../assets/feature/caseGroup.png";
import lightIcon from "../assets/feature/logo (4).png";
import backgroundIMG from "../assets/fansImg/bgImg.png";

const Features = () => {
  return (
    <section id="features">
      <div className=" hidden md:flex  justify-end relative right-[100px] top-[50px]">
        <img src={arrowUp} alt="" className=" w-[30px] md:w-[35px]" />
      </div>
      <div className="flex flex-col md:flex-row px-5 md:px-0  md:space-x-32 md:justify-around ">
        <div className=" max-w-[250px]  md:max-w-[600px] w-full order-2 md:order-1">
          <img src={phone} alt="" className="w-full h-full object-cover " />
        </div>

        <div className="mt-20 order-1 md:order-2 ">
          <button className="rounded-full bg-[#ff8c62] font-[500] px-6 py-1">
            influencer
          </button>
          <div className="w-full md:max-w-[500px] mt-5">
            <h1 className="text-[32px] md:text-[62px] font-[500] leading-[1] md:leading-[1]">
              Earn <span className="text-[#27ae60]"> Money</span> while you chat
            </h1>
          </div>
          <div className="w-full max-w-[410px] mt-10">
            <p className="text-[15px] md:text-[18px]">
              As an influencer, you get paid by your audience to connect with
              them. That way to maximize time while earning.
            </p>
          </div>
        </div>
      </div>

      <div className="  ">
        <div className="grid md:grid-cols-2 pb-20 ">
          <div className="bg-[#272727] ">
            <div className="hidden md:block md:col-span-1 w-full relative max-w-[500px] z-50  ms-[185px]  ">
              <img src={phoneCase} alt="" />
            </div>
            <div className="absolute w-full h-full z-20 top-0 left-0">
              <img src={backgroundIMG} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="bg-[#202020] ">
            <div className="">
              <div className="max-w-[500px] mx-auto py-20 md:py-36 px-5 md:px-0  ">
                <div className="flex  items-center justify-between  mb-5">
                  <button className="rounded-full bg-[#FFBB62] font-[500]  px-4 md:px-6 py-0.5  z-50 ">
                    Influencers
                  </button>
                  <div className="w-10 md:w-14">
                    <img src={lightIcon} alt="" />
                  </div>
                </div>

                <div>
                  <div className="w-full max-w-[500px] text-white relative z-50">
                    <h1 className=" text-[35px] md:text-[68px] font-[500] leading-[1] md:leading-[1] ">
                      Filter the noise in the dm’s
                    </h1>
                  </div>

                  <div className="text-white w-full max-w-[420px] mt-5">
                    <p className="text-[15px] md:text-[18px] leading-1">
                      Ear1 helps you get rid of all the noise in your dm’s
                      across other social media apps. This way, you are sure to
                      connect with serious people and make genuine business and
                      personal connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="absolute h-full   z-20 ">
              <img src={backgroundIMG} alt="" className="w-full h-full" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
