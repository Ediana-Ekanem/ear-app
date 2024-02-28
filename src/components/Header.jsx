import React from "react";

const Header = () => {
  return (
    <section id="home">
      <div
        className="bg-[#029f58] py-10 md:py-0 text-white"
        style={{ fontFamily: "DM Sans", position: "relative", zIndex: "0" }}
      >
        <div className="mx-auto w-[300px]  md:mt-0 md:w-[700px] py-10">
          <h1 className=" text-[40px] md:text-[100px] font-[500] md:font-[700] leading-[50px] md:leading-[122.98px] text-center">
            Build direct, meaningful connections.
          </h1>
          <p className=" text-[12px]  md:text-[16px] w-[350px] md:w-[480px] mx-auto">
            Ear1 helps you connect directly with your favourite influencers for
            a small fee. What’s more? We assure you of getting a reply.
          </p>
        </div>

        <div className="flex justify-center items-center ">
          <div className=" md:flex space-y-5 md:space-y-0  md:md:space-x-5">
            <div>
              <img
                src="/src/assets/headerAssest/googleBtn.png"
                alt=""
                className="w-40"
              />
            </div>
            <div>
              <img
                src="/src/assets/headerAssest/iosBtn.png"
                alt=""
                className="w-40"
              />
            </div>
          </div>
        </div>
        <div className=" w-8 md:w-10 relative left-[420px] md:left-[1200px] bottom-[200px] md:bottom-[105px] ">
          <img
            src="/src/assets/headerAssest/arrow-down-circle.png"
            alt=""
            className="w-full"
          />
        </div>

        <div
          className="mx-auto me-20 "
          // style={{ zIndex: "", position: "relative" }}
        >
          <div className=" flex   ">
            <div className=" hidden md:block relative top-[51px] left-[400px]">
              <img src="/src/assets/headerAssest/phone-lfet.png" alt="" />
            </div>
            <div className="relative z-20 top-5 md:top-0">
              <img
                src="/src/assets/headerAssest/phone-center.png"
                alt=""
                className=""
              />
            </div>
            <div className=" hidden md:block relative top-6 right-[380px]">
              <img src="/src/assets/headerAssest/phone-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
