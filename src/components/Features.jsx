import React from "react";
import Container from "./Container";
import phone from "../assets/feature/phone.png";
import arrowUp from "../assets/feature/logo (12).png";
import popUp from "../assets/feature/popup.png";
import phoneCase from "../assets/feature/Rectangle 43.png";
import lightIcon from "../assets/feature/logo (4).png";

const Features = () => {
  return (
    <section id="features">
      <Container>
        <div className=" flex justify-end relative right-[100px] top-[50px]">
          <img src={arrowUp} alt="" className=" w-[30px] md:w-[35px]" />
        </div>
        <div className="grid md:grid-cols-2 pt-20 ">
          <div className="hidden md:block md:col-span-1 w-[500px] mx-auto">
            <img src={phone} alt="" className="w-full h-ful object-cover" />
          </div>

          <div className="md:col-span-1 mx-auto md:mx-0 pb-10">
            <button className="rounded-xl bg-[#ff8c62] font-[500] px-3">
              influencer
            </button>
            <div className="w-[400px] mt-3">
              <h1 className=" text-[35px] md:text-[58px] font-[500] leading-[40px] md:leading-[68.75px]">
                Filter the noise in the dm’s
              </h1>
            </div>
            <div className=" w-[410px]  mt-5">
              <p className="text-[15px] md:text-[18px]">
                Ear1 helps you get rid of all the noise in your dm’s across
                other social media apps. This way, you are sure to connect with
                serious people and make genuine business and personal
                connections.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div>
        <div className="grid md:grid-cols-2 pb-20 ">
          <div className="bg-[#272727]">
            <div className="hidden md:block md:col-span-1 w-[600px] mx-auto  pb-20 ">
              <div className="ps-40 relative">
                <img
                  src={phoneCase}
                  alt=""
                  className="w-full h-ful object-cover"
                />

                <div className="absolute top-[130px] ms-6 w-[390px]">
                  <img src={popUp} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#202020]">
            <div className="max-w-[600px] mx-auto py-16 px-5 md:px-0">
              <div className="flex  items-center justify-between  mb-5">
                <button className="rounded-xl bg-[#FFBB62] font-[500] px-5">
                  Fans
                </button>
                <div className="w-8">
                  <img src={lightIcon} alt="" />
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
                    messages. Don’t be part of the noise in the dms. Get ahead
                    of the game by paying a small fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
