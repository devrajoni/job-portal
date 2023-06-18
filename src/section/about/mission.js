import React from "react";
import { H1, Paragraph } from "../../components/typography";

function Mission() {
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-8 py-24">
            <div className=" group col-span-12 lg:col-span-6 w-full">
              <div className="flex items-center h-full px-4 py-6">
                <div className="flex gap-4 h-full items-center">
                  <div className="">
                    <Paragraph className="text-[#0098db]">
                      Our Mission
                    </Paragraph>
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

            <div className=" group col-span-12 lg:col-span-4 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mission;
