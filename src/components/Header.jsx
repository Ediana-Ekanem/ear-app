import React from "react";

const Header = () => {
  return (
    <section id="home">
      <div
        className="bg-[#029f58]  text-white"
        style={{ fontFamily: "DM Sans", position: "relative", zIndex: "0" }}
      >
        <div className="mx-auto w-[700px] py-10">
          <h1 className="text-[100px] font-[700] leading-[122.98px] text-center">
            Build direct, meaningful connections.
          </h1>
          <p className="w-[480px] mx-auto">
            Ear1 helps you connect directly with your favourite influencers for
            a small fee. What’s more? We assure you of getting a reply.
          </p>
        </div>

        <div className="flex justify-center space-x-5 ">
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
          <div className="w-10 relative left-96 bottom-10">
            <img
              src="/src/assets/headerAssest/arrow-down-circle.png"
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <div className="mx-auto" style={{ zIndex: "1", position: "relative" }}>
          <div className=" flex ">
            <div className="relative top-[51px] left-[400px]">
              <img src="/src/assets/headerAssest/phone-lfet.png" alt="" />
            </div>
            <div className="relative z-20">
              <img
                src="/src/assets/headerAssest/phone-center.png"
                alt=""
                className=""
              />
            </div>
            <div className="relative top-6 right-[380px]">
              <img src="/src/assets/headerAssest/phone-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
