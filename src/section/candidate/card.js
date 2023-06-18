import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Logo2 from "../../assets/logo2.jpg";
import { H5, Paragraph } from "../../components/typography";

function Card() {
  const content = [
    {
      logo: Logo2,
      title: "Peiman Mardaniyan",
      designation: "Physician",
      description: "I am available",
    },
    {
      logo: Logo2,
      title: "Peiman Mardaniyan",
      designation: "Physician",
      description: "I am available",
    },
    {
      logo: Logo2,
      title: "Peiman Mardaniyan",
      designation: "Physician",
      description: "I am available",
    },
  ];
  return (
    <>
      <div className=" bg-[#F7F7F8] pb-20 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-12 gap-6 mt-12">
          {content.map((item) => (
            <div
              className=" group col-span-12 md:col-span-6 lg:col-span-4 "
              key={item}
            >
              <div className="group-hover:drop-shadow-2xl card bg-white flex justify-center items-center border group-hover:border-[#0098db] gap-4 rounded-md w-full h-full">
                <div className="px-4 py-6">
                  <div className="flex gap-4 h-full items-center">
                    <div className="">
                      <img src={item.logo} alt="logo1" height="50" width="50" />
                    </div>
                    <div className="content px-4 w-full">
                      <H5 className="font-bold text-xl">{item.title}</H5>
                      <Paragraph className="opacity-70">
                        {item.designation}
                      </Paragraph>
                      <Paragraph>{item.description}</Paragraph>
                      <Paragraph className="flex mt-1 text-[#0098db]">
                        View Resume
                        <HiArrowLongRight className="ml-1 text-2xl" />
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
