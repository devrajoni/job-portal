import { HiArrowLongRight } from "react-icons/hi2";
import image1 from "../../assets/r1.png";
import image2 from "../../assets/r2.png";
import { H3, Paragraph } from "../../components/typography";
export default function Register() {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <div className="py-24 px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-12 ">
            <div className=" group col-span-12 lg:col-span-6 ">
              <div
                className=" object-center md:h-[295px]  w-[360px] md:w-[546px] bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: `url(${image1})`,
                }}
              >
                <div className="flex h-full p-12  items-center">
                  <div>
                    <H3 className="font-bold text-xl">Become a Candidate</H3>
                    <Paragraph className="py-4 w-72">
                      Click the button below to get started with our candidate
                      registration process. You will be able to post your resume
                      and apply for jobs.
                    </Paragraph>
                    <button className="flex font-bold py-2 px-6 rounded border bg-[#FFFFFF] hover:border-[#0098db] hover:text-black text-[#0098db]">
                      Register Now
                      <HiArrowLongRight className="ml-2 bold text-3xl text-[#0098db]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 lg:col-span-6 text-white ">
              <div
                className=" object-center md:h-[295px]  w-[350px] md:w-[546px] bg-cover bg-center bg-no-repeat rounded-lg"
                style={{
                  backgroundImage: `url(${image2})`,
                }}
              >
                <div className="flex h-full p-12  items-center">
                  <div>
                    <H3 className="font-bold text-xl">Become an Employer</H3>
                    <Paragraph className="py-4 w-72">
                      Click the button below to get started with our employer
                      registration process. You will be able to post jobs and
                      get candidates for your job.
                    </Paragraph>
                    <button className="flex font-bold py-2 px-6 rounded border bg-[#FFFFFF] hover:border-[#0098db] hover:text-black text-[#0098db]">
                      Register Now
                      <HiArrowLongRight className="ml-2 bold text-3xl text-[#0098db]" />
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
