import Navbar from "../containers/navbar";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import "./Hero.css";
function Hero() {
  return (
    <div className="Hero w-full h-screen">
      <Navbar />
      <main className=" max-w-7xl w-full mx-auto flex md:flex flex-col mt-12 px-2">
        <div className="left  mt-12">
          <h1 className="spacefont text-6xl  leading-relaxed">
            Startup <br /> Registration
          </h1>
          <Text className="max-w-xl mt-8">
            E-Summit&apos;23 is a convention of budding entrepreneurs,
            innovators, and investors which includes competitions, workshops,
            panel discussions, and speaker sessions from some eminent names in
            the corporate world for supporting, promoting, and informing about
            entrepreneurship and startups.
          </Text>
          <div className="mt-12 flex gap-6 flex-wrap">
            <Button colorScheme="orange" fontFamily="Esoris" size="lg">
              Register Now
            </Button>
            <Button
              className=" hover:bg-white/10"
              size="lg"
              fontFamily="Esoris"
              colorScheme="transperant"
            >
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
