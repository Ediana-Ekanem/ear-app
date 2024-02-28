import React from "react";
import Container from "./Container";

const Fans = () => {
  return (
    <section id="fans">
      <div className="bg-gray-200 py-20 md:py-0 ">
        <Container>
          <div className="md:flex md:justify-between ">
            <div className="md:mt-14">
              <div className=" w-[310px] md:w-[500px] mx-auto md:mx-0 border-2  ">
                <h2 className="text-[#007640]  text-[35px] md:text-[62px] text-center md:text-start leading-[35px] md:leading-[72.79px] font-[500]">
                  What can Ear1 help you do?
                </h2>
              </div>

              <div className=" w-[420px] md:w-[530px] mt-5 border-2  mx-auto md:mx-0">
                <p className="font-[400] text-[15px] md:text-[18px] text-[#000000]">
                  Are you an individual looking to connect with an influencer
                  without the hassle of waiting for the reply over a long time,
                  or an influencer looking to filter your dm’s and connect with
                  your audience, Ear1 has got you covered.
                </p>
              </div>
            </div>

            <div className="hidden md:flex">
              <img src="/src/assets/fansIcons/fans.png" alt="" />
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#ffffff] py-20">
        <Container>
          <div className="flex justify-around">
            <div className=" ">
              <button className="rounded-xl bg-[#FFBB62] font-[500] px-5 mb-3">
                Fans
              </button>
              <div className=" w-[430px] md:w-[500px]">
                <h1 className="text-[35px] md:text-[68px] font-[500] leading-[40px] md:leading-[68.75px]">
                  Connect with top influencers in your field
                </h1>
              </div>
              <div className="w-[400px] mt-7">
                <p className="text-[15px] md:text-[18px] text-[#000000]">
                  From Tech to music to business, Ear1 has a wide range of
                  industry experts in diverse fields you have always wanted to
                  connect with. Now is your best chance.
                </p>
              </div>
            </div>

            <div className="relative hidden md:flex ">
              <img
                src="/src/assets/fansImg/logo1.png"
                alt=""
                className="w-[350px]  h-[410px]"
              />
              <img
                src="/src/assets/fansImg/logo2.png"
                alt=""
                className="absolute right-2 top-[1px] w  h-[420px]"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Fans;
