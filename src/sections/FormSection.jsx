import formbanner from "../assets/formbanner.png";
import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import // FormControl,
// FormLabel,
// FormErrorMessage,
// FormHelperText,
"@chakra-ui/react";
// import { useState } from "react";
function FormSection() {
  const [formData, setFormData] = useState({
    Name_of_your_startup: "",
    founders_name: "",
    Email_Address: "",
    Contact_Number: "",
    Which_city_is_your_startup_based_in: "",
    Mention_your_Startup_website: "",
    What_is_your_Target_Customer_and_Market_Size: "",
    What_is_your_Primary_Revenue_Stream: "",
    Mention_any_two_close_competitors_of_your_Startup: "",
    Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed:
      "",
    What_are_some_of_the_challenges_you_are_facing_with_your_Startup: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("clicked");
    // Send a POST request to the server
    fetch("http://localhost:3000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Handle the server response
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <div className="mt-20 lg:px-10 px-5 w-full flex items-center">
          <div className="mx-auto w-full max-w-5xl flex flex-wrap">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Name of your startup <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Name_of_your_startup "
                  value={formData.Name_of_your_startup}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                Founder&apos;s Name <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="founders_name"
                  value={formData.founders_name}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Email Address <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Email_Address"
                  value={formData.Email_Address}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Contact Number<span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Contact_Number"
                  value={formData.Contact_Number}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Which city is your startup based in?{" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Which_city_is_your_startup_based_in"
                  value={formData.Which_city_is_your_startup_based_in}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Mention your Startup website. (Mention NA, if not applicable.){" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Mention_your_Startup_website"
                  value={formData.Mention_your_Startup_website}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  What is your Target Customer and Market Size?{" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="What_is_your_Target_Customer_and_Market_Size"
                  value={formData.What_is_your_Target_Customer_and_Market_Size}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  What is your Primary Revenue Stream?{" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="What_is_your_Primary_Revenue_Stream"
                  value={formData.What_is_your_Primary_Revenue_Stream}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Mention any two close competitors of your Startup{" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Mention_any_two_close_competitors_of_your_Startup"
                  value={
                    formData.Mention_any_two_close_competitors_of_your_Startup
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  Can you provide a brief description about your Startup,
                  Product and the need/gap being addressed?{" "}
                  <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed"
                  value={
                    formData.Can_you_provide_a_brief_description_about_your_Startup_Product_and_the_need_being_addressed
                  }
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-1/2 w-full lg:px-6  py-2">
                <label className="  text-sm text-gray-900">
                  What are some of the challenges you are facing with your
                  Startup? <span className=" text-red-500">*</span>
                </label>
                <input
                  className="rounded-lg border text-black my-1 p-2 w-full"
                  type="text"
                  name="What_are_some_of_the_challenges_you_are_facing_with_your_Startup?"
                  value={
                    formData.What_are_some_of_the_challenges_you_are_facing_with_your_Startup
                  }
                  onChange={handleChange}
                />
              </div>

              <Button
                colorScheme="orange"
                type="submit"
                fontFamily="Esoris"
                size="lg"
              >
                Register
              </Button>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center my-8"></div>
      </div>
    </div>
  );
}

export default FormSection;
