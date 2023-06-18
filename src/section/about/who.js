import React from "react";
import {
  BsFillCalendarHeartFill,
  BsPeopleFill,
  BsStickiesFill,
  BsTrello,
} from "react-icons/bs";
import { H1, H5, Paragraph } from "../../components/typography";
const content = [
  {
    icon: <BsTrello />,
    number: "4",
    description: "Live Job",
  },
  {
    icon: <BsFillCalendarHeartFill />,
    number: "4",
    description: "Companies",
  },
  {
    icon: <BsPeopleFill />,
    number: "4",
    description: "Candidates",
  },
  {
    icon: <BsStickiesFill />,
    number: "4",
    description: "New Jobs",
  },
];
function Who() {
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-8 py-24">
            <div className=" group col-span-12 lg:col-span-8 w-full">
              <div className="flex items-center h-full px-4 py-6">
                <div className="flex gap-4 h-full items-center">
                  <div className="">
                    <Paragraph className="text-[#0098db]">Who we are</Paragraph>
                    <div className="py-4">
                      <H1 className=" text-5xl">
                        We’re a highly skilled and professionals team.
                      </H1>
                    </div>
                    <div className="py-6">
                      <Paragraph className="opacity-70">
                        Praesent non sem facilisis, hendrerit nisi vitae,
                        volutpat quam. Aliquam metus mauris, semper eu eros
                        vitae, blandit tristique metus. Vestibulum maximus nec
                        justo sed maximus.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" group col-span-12 lg:col-span-4 ">
              {content.map((item) => (
                <div className=" p-4  gap-4 rounded-lg flex w-full">
                  <div className="text-3xl text-[#0098db]  bg-[#ECF4FC]  flex items-center rounded-md  p-4">
                    {item.icon}
                  </div>
                  <div className="content">
                    <H5 className="font-bold ">{item.number}</H5>
                    <Paragraph className=" w-full">
                      {item.description}
                    </Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Who;
