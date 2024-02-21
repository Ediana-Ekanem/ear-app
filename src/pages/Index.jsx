import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Fans from "../components/Fans";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Influencers from "../components/Influencers";
import Container from "../components/Container";
import Header from "../components/Header";

const Index = () => {
  return (
    <div>
      <div className="bg-[#029f58]">
        <Container>
          <nav className=" flex justify-between items-center pt-5  text-white">
            <div>
              <img
                src="/src/assets/headerAssest/logo 1.png"
                alt=""
                className="w-14 "
              />
            </div>
            <div className="flex space-x-5">
              <Link to="#home" smooth>
                Home
              </Link>
              <Link to="#fans" smooth>
                For Fans
              </Link>
              <Link to="#influencers" smooth>
                For Influencers
              </Link>
              <Link to="#features" smooth>
                Features
              </Link>
              <Link to="#faqs" smooth>
                FAQ's
              </Link>
            </div>
          </nav>
        </Container>
      </div>
      <Header />
      <Fans />
      <Features />
      <Influencers />
      <Faqs />
    </div>
  );
};

export default Index;
