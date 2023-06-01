import formbanner from "../assets/formbanner.png";
import { Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
// import { useState } from "react";
function FormSection() {
  // const [input, setInput] = useState("");

  // const handleInputChange = (e) => setInput(e.target.value);

  // const isError = input === "";
  return (
    <div className="max-w-7xl w-full mx-auto flex md:flex flex-col mt-32 rounded-lg overflow-hidden bg-gray-200">
      <img src={formbanner} alt="formbanner" />
      <div className="w-full">
        <Heading
          as="h1"
          size="xl"
          fontFamily="Esoris"
          className=" spacefont text-gray-950 mx-auto w-full text-center mt-5 "
          noOfLines={1}
        >
          REGISTRATION FORM
        </Heading>
        <div className="mt-20 px-10 w-full flex items-center">
          <div className="mx-auto w-full max-w-5xl flex flex-wrap">
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">Email</FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">Email</FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>

            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired>
                <FormLabel className=" text-black  text-xs font-thin">Country</FormLabel>
                <select className="bg-white w-full p-2 rounded text-black" placeholder="Select country">
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
