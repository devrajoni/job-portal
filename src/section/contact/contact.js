import React from "react";
import { ImCompass } from "react-icons/im";
import InputField from "../../components/InputField";
import { H1, H3, Paragraph } from "../../components/typography";

function Contact() {
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-8 py-24">
            <div className=" group col-span-12 lg:col-span-6 w-full">
              <div className="flex items-center h-full px-4 py-6">
                <div className="flex gap-4 h-full items-center">
                  <div className="">
                    <Paragraph className="text-[#0098db]">Who we are</Paragraph>
                    <div className="pt-2">
                      <H1 className=" text-4xl">
                        We care about customer service
                      </H1>
                    </div>
                    <div className="py-6">
                      <Paragraph className="opacity-70">
                        Want to chat? We’d love to hear from you! Get in touch
                        with our Customer Success Team to inquire about speaking
                        events, advertising rates, or just say hello.
                      </Paragraph>
                    </div>
                    <div>
                      <button className="py-2 px-12 rounded font-bold bg-[#0098db] text-white">
                        Email Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 lg:col-span-6 w-full bg-[#F1F2F4] drop-shadow-xl ">
              <div className=" border  gap-4 rounded-md w-full h-full">
                <div className="px-6 pt-12">
                  <H3 className="font-bold">Get In Touch</H3>
                </div>
                <div className="grid grid-cols-12 gap-4 px-6 pt-6">
                  <div className="col-span-12 lg:col-span-6 ">
                    <InputField
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="py-3 w-full rounded-md border px-8  bg-[#FFFFF] "
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-6 ">
                    <InputField
                      id="email"
                      type="text"
                      placeholder="Email"
                      className="py-3 w-full rounded-md border px-8 "
                    />
                  </div>
                </div>
                <div className="px-6 pt-6">
                  <InputField
                    id="subject"
                    type="text"
                    placeholder="Subjects"
                    className="py-3 px-8 rounded-md border w-full"
                  />
                </div>
                <div className="px-6 pt-6">
                  <textarea
                    rows="4"
                    className="py-3 opacity-50 px-8 rounded-md border w-full"
                    name="comment"
                  >
                    Message
                  </textarea>
                </div>
                <div className="pt-6 px-6 pb-12 ">
                  <button className="py-3 flex gap-2 px-12 w-full justify-center rounded font-bold bg-[#0098db]  text-white">
                    <Paragraph className="font-bold ">Send Message</Paragraph>
                    <ImCompass className="text-xl font-bold" />
                  </button>
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
