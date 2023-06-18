import { ImFacebook, ImLinkedin, ImTwitter, ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";
import { Paragraph } from "./typography";

export default function Footer() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="grid grid-cols-12 gap-6 py-20 px-6 md:px-12 lg:px-32   text-left">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 md:text-xs">
            <div className="relative">
              <Paragraph className="font-bold pb-2 border-b-1">Logo</Paragraph>
              <hr className="absolute text-2xl  bg-blue h-1 " />
            </div>
            <Paragraph className="w-80">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of
              America
            </Paragraph>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 md:text-xs">
            <h1 className="text-2xl pb-4">Quick Link</h1>
            <Link to="/about">
              <Paragraph className="text-1xl pb-4">About</Paragraph>
            </Link>
            <Link to="/contact">
              <Paragraph className="text-1xl pb-4">Contact</Paragraph>
            </Link>
            <Link to="/price">
              <Paragraph className="text-1xl pb-4">Pricing</Paragraph>
            </Link>
            <Link to="/blog">
              <Paragraph className="text-1xl pb-4">Blog</Paragraph>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 md:text-xs">
            <h1 className="text-2xl pb-4">Candidate</h1>
            <Link to="/job">
              <Paragraph className="text-1xl pb-4">Browse Job</Paragraph>
            </Link>
            <Link to="/candidate">
              <Paragraph className="text-1xl pb-4">Browse Candidates</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">
                Candidate Dashboard
              </Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Saved Job</Paragraph>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 md:text-xs">
            <h1 className="text-2xl pb-4">Employers</h1>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Post a Job</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Browse Employers</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">
                Employers Dashboard
              </Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Applications</Paragraph>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-3 lg:col-span-2 md:text-xs">
            <h1 className="text-2xl pb-4">Support</h1>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Faqs</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Privacy & Policy</Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">
                Terms & Conditions
              </Paragraph>
            </Link>
            <Link to="/">
              <Paragraph className="text-1xl pb-4">Refund Policy</Paragraph>
            </Link>
          </div>
        </div>
        <hr className=" text-2xl  bg-slate-400 opacity-30" />
        <div className="flex justify-between py-6 px-6 md:px-12 lg:px-32 ">
          <Paragraph>© Jobpilot 2023 | All Rights Reserved</Paragraph>
          <div className="flex gap-6 text-xl text-[#767E94]">
            <ImFacebook />
            <ImYoutube />
            <ImTwitter />
            <ImLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}
