import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoBookmarkOutline } from "react-icons/io5";
import logo from "../../assets/logo12.png";
import { H1, H3, Paragraph } from "../../components/typography";

function Contact() {
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-8 py-24">
            <div className=" group col-span-12 lg:col-span-8 w-full">
              <div className="flex items-center h-full px-4 py-6">
                <div className="flex gap-4 h-full items-center">
                  <div className="">
                    <div className="flex gap-4 pt-2">
                      <div>
                        <img src={logo} alt="logo" />
                      </div>
                      <div>
                        <H1>Mid level Laravel Developer</H1>
                        <div className="flex gap-2 pt-2">
                          <H3>at Templatecookie</H3>

                          <span className="bg-black px-3 py-1 text-white">
                            CONTRACTUAL
                          </span>
                          <span>Featured</span>
                        </div>
                      </div>
                    </div>
                    <div className="py-6">
                      <H3>Job Description</H3>
                      <Paragraph className="opacity-70 pt-2">
                        Velstar is a Shopify Plus agency, and we partner with
                        brands to help them grow, we also do the same with our
                        people! Here at Velstar, we don't just make websites, we
                        create exceptional digital experiences that consumers
                        love. Our team of designers, developers, strategists,
                        and creators work together to push brands to the next
                        level. From Platform Migration, User Experience & User
                        Interface Design, to Digital Marketing, we have a proven
                        track record in delivering outstanding eCommerce
                        solutions and driving sales for our clients. The role
                        will involve translating project specifications into
                        clean, test-driven, easily maintainable code. You will
                        work with the Project and Development teams as well as
                        with the Technical Director, adhering closely to project
                        plans and delivering work that meets functional &
                        non-functional requirements. You will have the
                        opportunity to create new, innovative, secure and
                        scalable features for our clients on the Shopify
                        platform Want to work with us? You're in good company!
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 lg:col-span-4 w-full">
              <div className="flex gap-4 pt-8">
                <div>
                  <IoBookmarkOutline className=" text-[#0098db] text-2xl flex h-full items-center" />
                </div>
                <button className="py-2 font-bold flex justify-center font-bold px-4 md:px-20 rounded border  bg-[#0098db] text-white">
                  Apply Now
                  <HiArrowLongRight className="ml-2 text-3xl" />
                </button>
              </div>
              <div className="pt-12">
                <div className=" border rounded-2xl">
                  <div className=" p-6">
                    <div>
                      <H3 className="font-bold">Salary Competitive</H3>
                      <Paragraph>Project Basts based</Paragraph>
                    </div>
                  </div>
                </div>
                <div className=" border rounded-2xl mt-8">
                  <div className=" p-6">
                    <div className="pb-3 pt-3">
                      <H3 className="font-bold text-xl">Recent Post</H3>
                    </div>
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

export default Contact;
