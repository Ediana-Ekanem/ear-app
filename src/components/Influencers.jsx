import React from "react";
import chatIcon from "../assets/chat/chatIcon.png";
import topBar from "../assets/chat/Top bar.png";
import chat1 from "../assets/chat/chat2.png";
import chat2 from "../assets/chat/chat3.png";
import chat3 from "../assets/chat/chat4.png";
import chat4 from "../assets/chat/chat5.png";

const Influencers = () => {
  return (
    <section id="influencers">
      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#029F58]">
          <div className="max-w-[600px] mx-auto py-16 px-5 md:px-0">
            <div className="flex  items-center justify-between  mb-5">
              <button className="rounded-xl bg-[#FFBB62] font-[500] px-5">
                Fans
              </button>
              <div className="w-8">
                <img src={chatIcon} alt="" />
              </div>
            </div>

            <div>
              <div className="w-[400px] text-white">
                <h1 className=" text-[35px] md:text-[68px] font-[500] leading-[40px] md:leading-[68.75px]">
                  Be assured of replies
                </h1>
              </div>

              <div className="text-white w-[410px] mt-5">
                <p className="text-[15px] md:text-[18px]">
                  With ear1, we assure you of getting a response to your
                  messages. Don’t be part of the noise in the dms. Get ahead of
                  the game by paying a small fee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#efefe5]">
          <div className="max-w-[600px] mx-auto ">
            <div className="w-[500px] h-20">
              <img src={topBar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="  ms-[200px]  w-[300px] h-26 mt-3">
              <img src={chat1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 w-[300px] h-20">
              <img
                src={chat2}
                alt=""
                className="w-full h-full object-cover rounded-tl-xl  rounded-tr-xl rounded-br-xl"
              />
            </div>
            <div className="  w-[300px] h-20 mt-3">
              <img
                src={chat3}
                alt=""
                className="w-full h-full object-cover rounded-tl-xl  rounded-tr-xl rounded-br-xl"
              />
            </div>
            <div className="w-[500px] h-20 mt-3">
              <img src={chat4} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencers;
