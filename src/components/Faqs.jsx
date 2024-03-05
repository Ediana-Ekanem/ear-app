import React from "react";
import feature from "../assets/faqs/feature.png";
import gameCard from "../assets/faqs/hands.png";
import phone from "../assets/faqs/phone.png";
import lightIcon from "../assets/faqs/logo (3).png";
import footerLogo from "../assets/footer/logo 2.png";
import faceBook from "../assets/footer/Facebook.png";
import iG from "../assets/footer/Instagram.png";
import x from "../assets/footer/Twitter.png";
import googleBtn from "../assets/headerAssest/googleBtn.png";
import iosBtn from "../assets/headerAssest/iosBtn.png";
import backgroundIMG from "../assets/fansImg/bgImg.png";
import arrowUp from "../assets/feature/logo (12).png";

const Faqs = () => {
  return (
    <>
      <div id="faqs" className="relative">
        <section>
          <div className="hidden md:flex justify-end">
            <img src={lightIcon} alt="" className="w-14  me-12" />
          </div>
          <div className=" w-full max-w-[400px] mb-20  px-7 md:px-0 md:ms-48">
            <h1 className=" text-[32px] md:text-[62px] font-[500] leading-[1]  text-[#007640]">
              The ear1 assurance
            </h1>
          </div>
          <div className="md:flex justify-center md:space-x-5">
            <div className=" w-full max-w-[400px] h-[400px] mx-  ">
              <img
                src={feature}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="">
              <div className=" relative w-full max-w-[300px] md:max-w-[500px]">
                <img src={phone} alt="" className="w-full object-cover" />
              </div>
            </div>
          </div>
          {/* Green Background section */}
          <div className="flex justify-center md:justify-end relative md:right-[270px] h-[200px]">
            <div className=" flex absolute justify-center md:justify-end  bottom-2 ">
              <div
                className="flex items-center bg-[#029b56] w-full max-w-[300px] md:max-w-[750px] pt-10 px-14 md:space-x-5"
                style={{ borderRadius: "50px", height: "400px" }}
              >
                <div className="hidden md:block">
                  <img src={gameCard} alt="" />
                </div>
                <div className=" text-white ">
                  <div className=" max-w-[310px] md:max-w-[500px]  w-full">
                    <h1 className="font-semibold text-[32px] md:text-[52px] leading-[1]">
                      Get ahead of your game
                    </h1>
                  </div>

                  <p className="my-5">
                    Save time and effort. Ear1 is your best choice.
                  </p>
                  <div className="md:flex space-y-5 md:space-y-0 md:space-x-5 pb-5">
                    <div className="w-36 md:w-44  mx-auto">
                      <img
                        src={googleBtn}
                        alt=""
                        className="w-full object-cover "
                      />
                    </div>
                    <div className="w-36 md:w-44  mx-auto">
                      <img
                        src={iosBtn}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full h-full z-20 top-0 left-0">
                <img src={backgroundIMG} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* End of Green Background Section */}
        </section>

        <div className="pt-10 md:pt-32 pb-5 px-10 md:px-32">
          <hr />
        </div>
      </div>

      <section>
        <div className="px-10 py-10 ">
          <div className="flex  justify-center md:justify-end mb-5">
            <div className=" w-full max-w-[1020px]">
              <div className=" w-full">
                <h3 className="mb-5">
                  <span className="font-bold">Be in the know.</span> Get access
                  to amazing offers and discounts
                </h3>

                <div className=" flex items-center border rounded-md overflow-hidden ">
                  <input
                    type="text"
                    className="py-2 px-4 flex-1 outline-none w-full"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="bg-black hover:bg-[#029f58] text-white py-2 px-6 font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" footer flex flex-col md:flex-row justify-start md:justify-around md:space-x-10 ">
            <div className="flex flex-col my-5">
              <div className="w-16">
                <img src={footerLogo} alt="" className="w-full" />
              </div>
              <div className="mt-3 flex gap-3">
                <div className="w-10">
                  <img src={faceBook} alt="" className="w-full" />
                </div>
                <div className="w-10">
                  <img src={x} alt="" className="w-full" />
                </div>
                <div className="w-10">
                  <img src={iG} alt="" className="w-full" />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h2 className="mb-2 font-semibold">Link</h2>
              <ul className=" text-[15px] space-y-2  ">
                <li>Home</li>
                <li>For Fans</li>
                <li>For Influencers</li>
                <li>Features</li>
                <li>FAQS</li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold mb-2">Get Help</h3>
              <ul className="no-underline text-[15px] space-y-2  ">
                <li>Support</li>
                <li>FAQ's</li>
                <li>Partnership</li>
              </ul>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold mb-2">Download</h3>
              <ul className="no-underline text-[15px] space-y-2 ">
                <li>Android</li>
                <li>IOS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resource</h3>
              <ul className="no-underline text-[15px] space-y-2 ">
                <li>Terms and Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" hidden md:flex justify-end relative me-10 mb-10 ">
          <div className="justify-end w-full  max-w-10 h-10 ">
            <img src={arrowUp} alt="" className=" w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
