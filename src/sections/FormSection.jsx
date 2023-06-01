import formbanner from "../assets/formbanner.png";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
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
                <FormLabel className=" text-gray-800 text-xs ">
                  Name of your startup
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Founder Name
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Email Address
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Contact Number
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Which city is your startup based in?
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Mention your Startup website. Mention NA, if not applicable
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  What is your Target Customer and Market Size?
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  What is your Primary Revenue Stream?
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  What is your Primary Revenue Stream?* Mention any two close
                  competitors of your Startup*
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  Can you provide a brief description about your Startup,
                  Product and the need/gap being addressed?
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired className="">
                <FormLabel className=" text-gray-800 text-xs ">
                  What are some of the challenges you are facing with your
                  Startup?
                </FormLabel>
                <input
                  type="email"
                  className="rounded-lg border text-black p-2 w-full"
                  // onChange={handleInputChange}
                />
              </FormControl>
            </div>

            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired>
                <FormLabel className=" text-black  text-xs font-thin">
                  At what stage are you in your Startup Journey?
                </FormLabel>
                <select
                  className="bg-white w-full p-2 rounded text-black"
                  placeholder="Select country"
                >
                  <option value="Ideation">Ideation</option>
                  <option value="MVP Ready (POC / Evaluation underway - not paid)">
                    MVP Ready (POC / Evaluation underway - not paid)
                  </option>
                  <option value="Customer Pilots Underways (Paid POC)">
                    Customer Pilots Underways (Paid POC)
                  </option>
                  <option value="Early Revenue (First set of paid customers on-board)">
                    Early Revenue (First set of paid customers on-board)
                  </option>
                  <option value="Early Scale (GTM and target market validated, now looking to scale)">
                    Early Scale (GTM and target market validated, now looking to
                    scale)
                  </option>
                  <option value="Scaling (Proven GTM with scaled customers, now going national or global)">
                    Scaling (Proven GTM with scaled customers, now going
                    national or global)
                  </option>
                </select>
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired>
                <FormLabel className=" text-black  text-xs font-thin">
                  Which event do you want to register for?
                </FormLabel>
                <select
                  className="bg-white w-full p-2 rounded text-black"
                  placeholder="Select country"
                >
                  <option value="Ideascape">Ideascape</option>
                  <option value="Get Funded">Get Funded</option>
                </select>
              </FormControl>
            </div>
            <div className="lg:w-1/2 w-full px-6 py-2">
              <FormControl isRequired>
                <FormLabel className=" text-black  text-xs font-thin">
                  What domain is your startup in?
                </FormLabel>
                <select
                  className="bg-white w-full p-2 rounded text-black"
                  placeholder="Select country"
                >
                  <option value="Healthcare/Pharma/Lifesciences">
                    Healthcare/Pharma/Lifesciences
                  </option>
                  <option value="Finance/Insurance/Fintech">
                    Finance/Insurance/Fintech
                  </option>
                  <option value="Manufacturing/Industrial">
                    Manufacturing/Industrial
                  </option>
                  <option value="Retail/Sales&amp;Marketing">
                    Retail/Sales&amp;Marketing
                  </option>
                  <option value="Deep technology (domain neutral) / AI">
                    Deep technology (domain neutral) / AI
                  </option>
                  <option value="Agriculture/FoodTech">
                    Agriculture/FoodTech
                  </option>
                  <option value="FMCG">FMCG</option>
                  <option value="EduTech">EduTech</option>
                  <option value="Drone">Drone</option>
                  <option value="AR/VR">AR/VR</option>
                  <option value="IOT">IOT</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-8">
          <Button colorScheme="orange" fontFamily="Esoris" size="lg">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
