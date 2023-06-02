import formbanner from "../assets/formbanner.png";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
// import { useState } from "react";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
// import { useState } from "react";
function FormSection() {
  // const [formData, setFormData] = useState({
  //   Name_of_your_startup: "",
  //   founders_name: "",
  //   Email_Address: "",
  //   Contact_Number: "",
  //   Which_city_is_your_startup_based_in: "",
  //   Mention_your_Startup_website: "",
  //   What_is_your_Target_Customer_and_Market_Size: "",
  //   What_is_your_Primary_Revenue_Stream: "",
  //   Mention_any_two_close_competitors_of_your_Startup: "",
  //   Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed:
  //     "",
  //   What_are_some_of_the_challenges_you_are_facing_with_your_Startup: "",
  // });
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("clicked");
  //   // Send a POST request to the server
  //   fetch("http://localhost:3000/form", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((response) => response.text())
  //     .then((data) => {
  //       console.log(data);
  //       // Handle the server response
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // Handle the error
  //     });
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  return (
    <div className="max-w-7xl w-full mx-auto flex md:flex flex-col mt-32 rounded-lg overflow-hidden bg-white">
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
        <div className="mx-auto w-full max-w-5xl mt-12 flex flex-wrap">
        <div className="lg:w-1/2 w-full px-6 py-2">
          <FormControl isRequired className="">
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
              At what stage are you in your Startup Journey?
            </FormLabel>
            <select
              className="bg-white border w-full p-2 rounded text-black"
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
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
              Which event do you want to register for?
            </FormLabel>
            <select
              className="bg-white w-full border p-2 rounded text-black"
              placeholder="Select country"
            >
              <option value="Ideascape">Ideascape</option>
              <option value="Get Funded">Get Funded</option>
            </select>
          </FormControl>
        </div>
        <div className="lg:w-1/2 w-full px-6 py-2">
          <FormControl isRequired>
            <FormLabel fontWeight="400" fontSize="sm" className=" text-black text-xs ">
              What domain is your startup in?
            </FormLabel>
            <select
              className="bg-white w-full border p-2 rounded text-black"
              placeholder="Select country"
              
            >
              <option  value="Healthcare/Pharma/Lifesciences">
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
    
    <div className="w-full flex justify-center my-8">
      <Button colorScheme="orange" fontFamily="Esoris" size="md">
        Register
      </Button>
    </div>
      </div>
    </div>
  );
}

export default FormSection;
