import React from "react";
import feature from "../assets/faqs/feature.png";
import gameCard from "../assets/faqs/logo (27).png";
import phone from "../assets/faqs/phone.png";
import Container from "./Container";
import lightIcon from "../assets/faqs/logo (3).png";
import footerLogo from "../assets/footer/logo 2.png";
import faceBook from "../assets/footer/Facebook.png";
import iG from "../assets/footer/Instagram.png";
import x from "../assets/footer/Twitter.png";
import { Link } from "react-router-dom";

const Faqs = () => {
  return (
    <section id="faqs ">
      <Container>
        <div className="py-10">
          <div className=" hidden md:block">
            <div className="flex justify-end ">
              <img src={lightIcon} alt="" className="w-10" />
            </div>
            <div className="w-[400px] mb-20 ms-24">
              <h1 className=" text-[35px] md:text-[68px] font-[500] leading-[40px] md:leading-[65px] text-[#007640]">
                The ear1 assurance
              </h1>
            </div>
            <div className="flex justify-center space-x-5">
              <div className="w-[400px]">
                <div className="h-[400px]">
                  <img
                    src={feature}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-[500px]">
                <img src={phone} alt="" className="w-full object-cover" />
              </div>
            </div>

            <div className=" w-[800px] h-[400px] relative bottom-[210px]  left-[350px]">
              <img src={gameCard} alt="" className="w-full h-full" />
            </div>
          </div>

          <section className="footer pb-10">
            <div className="px-20">
              <hr />
            </div>

            <div className="px-20 mt-10">
              <div className="flex  justify-center md:justify-end ">
                <div className="flex flex-col ">
                  <div className="mb-5">
                    <h3>
                      <span className="font-bold">Be in the know.</span> Get
                      access to amazing offers and discounts
                    </h3>
                  </div>
                  <div class="flex items-center border rounded-md overflow-hidden w-[400px]  md:w-[500px]">
                    <input
                      type="text"
                      className="py-2 px-4 flex-1 outline-none"
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

              <div className=" grid  grid-cols-3 md:grid-cols-4 lg:grid-cols-5  justify-center space-x-10 mt-10 ">
                <div className="flex flex-col">
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
                <div>
                  <h2 className="mb-2 font-semibold">Link</h2>
                  <ul className=" text-[15px] space-y-3">
                    <li>
                      <Link to="#home">Home</Link>
                    </li>
                    <li>
                      <Link to="#fans">For Fans</Link>
                    </li>
                    <li>
                      <Link to="#influencers" smooth>
                        For Influencers
                      </Link>
                    </li>
                    <li>
                      <Link to="#features">Features</Link>
                    </li>
                    <li>
                      <Link to="#faqs">FAQ's</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get Help</h3>
                  <ul className="no-underline text-[15px] space-y-3">
                    <li>Support</li>
                    <li>
                      <Link to="#faqs" smooth>
                        FAQ's
                      </Link>
                    </li>
                    <li>Partnership</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <h3 className="font-semibold mb-2">Download</h3>
                  <ul className="no-underline text-[15px] space-y-3">
                    <li>Android</li>
                    <li>IOS</li>
                  </ul>
                </div>
                <div className="hidden md:block">
                  <h3 className="font-semibold mb-2">Resource</h3>
                  <ul className="no-underline text-[15px] space-y-3">
                    <li>Terms and Service</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
