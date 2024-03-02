import React from "react";
import chatIcon from "../assets/chat/chatIcon.png";
import topBar from "../assets/chat/Top bar.png";
import chat1 from "../assets/chat/chat2.png";
import chat2 from "../assets/chat/chat3.png";
import chat3 from "../assets/chat/chat4.png";
import chat4 from "../assets/chat/chat5.png";
import backgroundImage from "../assets/fansImg/bgImg.png";

const Influencers = () => {
  return (
    <section id="influencers">
      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#029F58]">
          <div className="max-w-[500px] mx-auto py-20 md:py-36 px-5 md:px-0  ">
            <div className="flex  items-center justify-between  mb-5">
              <button className="rounded-full bg-[#FFBB62] font-[500] px-7 py-0.5   ">
                Fans
              </button>
              <div className=" w-10 md:w-14">
                <img src={chatIcon} alt="" />
              </div>
            </div>

            <div>
              <div className="w-full max-w-[500px] text-white">
                <h1 className=" text-[35px] md:text-[68px] font-[500] leading-[40px] md:leading-[68.75px]">
                  Be assured of replies
                </h1>
              </div>

              <div className="text-white w-full max-w-[420px] mt-5">
                <p className="text-[15px] md:text-[18px] leading-1">
                  With ear1, we assure you of getting a response to your
                  messages. Don’t be part of the noise in the dms. Get ahead of
                  the game by paying a small fee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#efefe5] hidden md:block"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="max-w-[600px] mx-auto ">
            <div className="w-[500px] h-20">
              <img src={topBar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="  ms-[200px]  w-[300px] h-26 mt-10">
              <img src={chat1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mt-10 w-[300px] h-">
              <img
                src={chat2}
                alt=""
                className="w-full h-full object-cover rounded-tl-xl  rounded-tr-xl rounded-br-xl"
              />
            </div>
            <div className="  w-[300px] h-20 mt-8">
              <img
                src={chat3}
                alt=""
                className="w-full h-full object-cover rounded-tl-xl  rounded-tr-xl rounded-br-xl"
              />
            </div>
            <div className="w-[500px] h-20 mt-20">
              <img src={chat4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencers;
