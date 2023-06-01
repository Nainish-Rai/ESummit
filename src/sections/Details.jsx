import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
function Details() {
  return (
    <div className="max-w-7xl w-full mx-auto flex md:flex flex-col mt-12 px-2">
      <Heading noOfLines={2} fontFamily="Esoris" as="h1" size="3xl">
        Ideascape
      </Heading>
      <Text  className="max-w-3xl px-1 mt-6">
        The trademark event of every E-Summit&apos;23. This competition invites
        all start-ups who have bold and revolutionary ideas to make their pitch
        in front of a panel of angel investors and negotiate to accelerate their
        business.
      </Text>
      <ul className=" list-disc ml-5 mt-5">
        <h2 className=" spacefont font-semibold -ml-4">
          Perks to participate in Ideascape
        </h2>
        <li>Pre-Incubation for 6 months.</li>
        <li>Registration with IIC Portal</li>
        <li>Mentorship opportunities</li>
        <li>Cash Prizes worth 10K</li>
      </ul>

      {/*  */}
      <Heading className="mt-20" fontFamily="Esoris" noOfLines={2} as="h1" size="3xl">
      Get Funded
      </Heading>
      <Text className="max-w-3xl px-1 mt-6">
      The trademark event of every E-Summit 23. This competition invites all start-ups who have bold and revolutionary ideas to make their pitch in front of a panel of angel investors and negotiate to accelerate their business.
      </Text>
      <ul className=" list-disc ml-5 mt-5">
        <h2 className=" spacefont font-semibold -ml-4">
          Perks to participate in Get Funded
        </h2>
        <li>Opportunity to present their idea to experienced investors</li>
        <li>Chance to receive valuable feedback from the investors</li>
        <li>Exposure to potential investors and networking opportunities</li>
        <li>Opportunity to win cash prizes and funding opportunities</li>
      </ul>
    </div>
  );
}

export default Details;
