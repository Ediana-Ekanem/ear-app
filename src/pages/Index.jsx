import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Fans from "../components/Fans";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Influencers from "../components/Influencers";
import Container from "../components/Container";
import Header from "../components/Header";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import logo from "../assets/headerAssest/logo 1.png";
import backgroundIMG from "../assets/fansImg/bgImg.png";

const Index = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div>
      <div className="bg-[#029f58] relative  ">
        <div className="relative">
          <Container>
            <nav className="flex justify-between items-center pt-5 text-white px-2 md:px-0">
              <div>
                <img src={logo} alt="" className="w-14" />
              </div>
              <div className="">
                <ul className="hidden mt-20 md:mt-0 md:flex gap-5 font-semibold">
                  <li>
                    <Link to="#home" smooth>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#fans" smooth>
                      For Fans
                    </Link>
                  </li>
                  <li>
                    <Link to="#influencers" smooth>
                      For Influencers
                    </Link>
                  </li>
                  <li>
                    <Link to="#features" smooth>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="#faqs" smooth>
                      FAQ's
                    </Link>
                  </li>
                </ul>

                <div className="md:hidden relative z-30" onClick={handleClick}>
                  {toggle ? <IoClose size={30} /> : <TiThMenu size={27} />}
                </div>
              </div>
            </nav>
            <div
              className={`absolute left-0 z-[200] w-full  bg-black p-5 text-white pb-5 transition-all duration-300 ease-in-out  ${
                toggle
                  ? "  translate-x-0 md:-translate-x-full"
                  : " -translate-x-full"
              }`}
            >
              <ul className="font-semibold space-y-3 text-[14px]">
                <li>
                  <Link className="" to="#home" smooth>
                    Home
                  </Link>
                </li>

                <li className="">
                  <Link to="#fans" smooth>
                    For Fans
                  </Link>
                </li>
                <li className="">
                  <Link to="#influencers" smooth>
                    For Influencers
                  </Link>
                </li>
                <li className="">
                  <Link to="#features" smooth>
                    Features
                  </Link>
                </li>
                <li className="">
                  <Link to="#faqs" smooth>
                    FAQ's
                  </Link>
                </li>
              </ul>
            </div>
          </Container>
          <Header />
        </div>
        {toggle && (
          <div className="absolute w-full h-full z-20 top-0 left-0 bg-black opacity-50" />
        )}
        <div className="absolute w-full h-full z-20 top-0 left-0">
          <img src={backgroundIMG} alt="" className="w-full h-full" />
        </div>
      </div>

      <Fans />
      <Influencers />
      <Features />
      <Faqs />
    </div>
  );
};

export default Index;
