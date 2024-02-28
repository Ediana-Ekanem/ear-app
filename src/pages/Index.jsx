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

const Index = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div>
      <div className="bg-[#029f58]">
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

              <div className="md:hidden" onClick={handleClick}>
                {toggle ? <IoClose size={30} /> : <TiThMenu size={27} />}
              </div>
            </div>
          </nav>
          <div
            className={`${
              toggle
                ? "absolute z-10 w-full left-0 bg-white p-5 text-black md:hidden pb-5 mb-10 transition-transform duration-300 ease-in-out transform translate-x-0"
                : "absolute z-10 w-full left-0 bg-white p-5 text-black :hidden pb-5 mb-10 transition-transform duration-300 ease-in-out transform -translate-x-full"
            }`}
          >
            <ul className="font-semibold space-y-3 text-[14px]">
              <li>
                <Link
                  className="transition hover:text-orange-500"
                  to="#home"
                  smooth
                >
                  Home
                </Link>
              </li>

              <li className="transition hover:text-orange-500">
                <Link to="#fans" smooth>
                  For Fans
                </Link>
              </li>
              <li className="transition hover:text-orange-500">
                <Link to="#influencers" smooth>
                  For Influencers
                </Link>
              </li>
              <li className="transition hover:text-orange-500">
                <Link to="#features" smooth>
                  Features
                </Link>
              </li>
              <li className="transition hover:text-orange-500">
                <Link to="#faqs" smooth>
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Header />
      <Fans />
      <Influencers />
      <Features />
      <Faqs />
    </div>
  );
};

export default Index;
