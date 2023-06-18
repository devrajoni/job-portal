import React from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  IoBookmarkOutline,
  IoBriefcaseOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Swal from "sweetalert2";
import Logo2 from "../../assets/logo2.jpg";
import Logo3 from "../../assets/logo3.jpg";
import { H1, Paragraph } from "../../components/typography";

function Feature() {
  const showAlert = () => {
    Swal.fire({
      title: "<strong>Unauthenticated</strong>",
      icon: "warning",
      html: "If you perform this action, you need to log in to your account first. Do you want to log in now ",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Yes, want to login",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Thumbs down",
    });
  };

  return (
    <>
      <div className="bg-[#FFFFFF] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-between title font-bold">
            <H1>Featured Job</H1>
            <button className="flex py-2 px-6 rounded border hover:bg-[#EEF5FC] hover:border-[#0098db] text-[#0098db]">
              View All
              <HiArrowLongRight className="ml-2 bold text-3xl" />
            </button>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className=" group col-span-12 ">
              <div className="p-4 lg:p-8 card bg-[#FFFFFF] border group-hover:border-[#0098db] rounded-lg ">
                <div className="lg:flex justify-between">
                  <div className="md:flex gap-6 lg:gap-12">
                    <img src={Logo2} alt="logo1" height="80" width="80" />
                    <div className="">
                      <div className="pt-4 md:pt-0 flex gap-4">
                        <Paragraph className="font-bold text-xl">
                          Laravel Developer
                        </Paragraph>
                        <div className=" rounded-full bg-[#EEF5FC] text-center flex justify-center items-center text-[#0098db]">
                          <Paragraph className="text-xs px-4 ">
                            Part Time
                          </Paragraph>
                        </div>
                      </div>
                      <div className="md:flex  md: gap-4 lg:gap-8 pt-2">
                        <div className="flex gap-2">
                          <IoLocationOutline className="text-xl text-[#0098db]" />
                          <Paragraph>Bangladesh</Paragraph>
                        </div>
                        <div className="flex gap-2 pt-2 md:pt-0">
                          <HiOutlineCurrencyDollar className="text-xl text-[#0098db]" />
                          <Paragraph>22k-100kBDT</Paragraph>
                        </div>
                        <div className="flex gap-2 pt-2 md:pt-0">
                          <IoBriefcaseOutline className="text-xl text-[#0098db]" />
                          <Paragraph>21hour</Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6 lg:pt-0  items-center">
                    <IoBookmarkOutline
                      onClick={showAlert}
                      className=" text-[#0098db] text-2xl"
                    />
                    <button className="flex pt-3 pb-3 font-bold px-8 rounded-md border bg-[#EEF5FC]  hover:bg-[#0098db] text-[#0098db] hover:text-white">
                      Apply Now
                      <HiArrowLongRight className="ml-2 text-3xl text-[#0098db]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 ">
              <div className="p-4 lg:p-8 card bg-[#FFFFFF] border group-hover:border-[#0098db] rounded-lg ">
                <div className="lg:flex justify-between">
                  <div className="md:flex gap-6 lg:gap-12">
                    <img src={Logo3} alt="logo1" height="80" width="80" />
                    <div className="">
                      <div className="pt-4 md:pt-0 flex gap-4">
                        <Paragraph className="font-bold text-xl">
                          Mern Developer
                        </Paragraph>
                        <div className=" rounded-full bg-[#EEF5FC] text-center flex justify-center items-center text-[#0098db]">
                          <Paragraph className="text-xs px-4 ">
                            Part Time
                          </Paragraph>
                        </div>
                      </div>
                      <div className="md:flex gap-4 lg:gap-8 pt-2">
                        <div className="flex gap-2">
                          <IoLocationOutline className="text-xl text-[#0098db]" />
                          <Paragraph>Bangladesh</Paragraph>
                        </div>
                        <div className="flex pt-2 md:pt-0 gap-2">
                          <HiOutlineCurrencyDollar className="text-xl text-[#0098db]" />
                          <Paragraph>22k-100kBDT</Paragraph>
                        </div>
                        <div className="flex pt-2 md:pt-0 gap-2">
                          <IoBriefcaseOutline className="text-xl text-[#0098db]" />
                          <Paragraph>21hour</Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6 lg:pt-0  items-center">
                    <IoBookmarkOutline
                      onClick={showAlert}
                      className=" text-[#0098db] text-2xl"
                    />
                    <button className="flex pt-3 pb-3 font-bold px-8 rounded border bg-[#EEF5FC]  hover:bg-[#0098db] text-[#0098db] hover:text-white">
                      Apply Now
                      <HiArrowLongRight className="ml-2 text-3xl text-[#0098db]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
