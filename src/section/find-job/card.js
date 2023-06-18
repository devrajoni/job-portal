import React from "react";
import { IoBookmarkOutline, IoLocationOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import Logo2 from "../../assets/logo2.jpg";
import { Paragraph } from "../../components/typography";

function Card() {
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
      <div className=" bg-[#F7F7F8] pb-20 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-12 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              className=" group col-span-12 md:col-span-6 lg:col-span-4 "
              key={item}
            >
              <div className="p-4 lg:p-8 card bg-[#FFFFFF] border group-hover:border-[#0098db] rounded-lg h-full">
                <div>
                  <div className="pt-4 md:pt-0 flex gap-4">
                    <Paragraph className="font-bold text-xl">
                      Laravel Developer
                    </Paragraph>
                  </div>
                  <div className="flex pt-2 gap-2">
                    <div className=" rounded-full bg-[#EEF5FC]   text-[#0098db]">
                      <Paragraph className="text-xs flex justify-center items-center h-full px-4 ">
                        Part Time
                      </Paragraph>
                    </div>
                    <div className="opacity-50">
                      <Paragraph>Salary : 22k-100kBDT</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-6 pt-4 ">
                    <img src={Logo2} alt="logo1" height="50" width="50" />
                    <div className="h-full items-center">
                      <div className=" flex  gap-4">
                        <Paragraph className="font-bold opacity-70">
                          AddTek Software Co.
                        </Paragraph>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <IoLocationOutline className="text-[#0098db]" />
                        <Paragraph className="opacity-50">Bangladesh</Paragraph>
                      </div>
                    </div>
                  </div>
                  <div className="gap-4 pt-4 flex justify-center">
                    <IoBookmarkOutline
                      onClick={showAlert}
                      className=" text-[#0098db] text-2xl"
                    />
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
