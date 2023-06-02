import Navbar from "../containers/Navbar";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import "./Hero.css";
function Hero() {
  return (
    <div className="Hero w-full h-screen">
      <Navbar />
      <main className=" max-w-7xl w-full mx-auto flex md:flex flex-col mt-12 px-2">
        <div className="left  mt-12">
          <h1 className="spacefont text-4xl lg:text-6xl ">
            Startup <br />
          </h1>
          <h1 className="spacefont text-4xl lg:text-6xl mt-8">Registartion</h1>
          <Text className="max-w-xl mt-8">
            E-Summit&apos;23 is a convention of budding entrepreneurs,
            innovators, and investors which includes competitions, workshops,
            panel discussions, and speaker sessions from some eminent names in
            the corporate world for supporting, promoting, and informing about
            entrepreneurship and startups.
          </Text>
          <div className="mt-12 flex gap-6 flex-wrap">
            <Button colorScheme="orange" fontFamily="Esoris" size="md">
              <a href="">ss</a> Register Now
            </Button>
            <Button
              className=" hover:bg-white/10"
              size="md"
              fontFamily="Esoris"
              colorScheme="transperant"
            >
              Learn More{" "}
              <span className="mx-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  focusable="false"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
