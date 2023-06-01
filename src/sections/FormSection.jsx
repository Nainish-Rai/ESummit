import formbanner from "../assets/formbanner.png";
import { Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from "@chakra-ui/react";
function FormSection() {
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
          <div className="mx-auto w-full max-w-5xl">
          <FormControl isRequired>
            <FormLabel className=" text-gray-900">Email address</FormLabel>
            <input type="email" />
          </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
