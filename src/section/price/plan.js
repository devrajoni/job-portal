import { HiCheck } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { H1, H3, Paragraph } from "../../components/typography";
function Plan() {
  return (
    <>
      <div className=" bg-[#FFFF] pt-12 pb-24 px-6 md:px-12 lg:px-32">
        <div className="text-center">
          <H1 className="font-bold text-2xl">Choose Plan</H1>
          <Paragraph className="opacity-50 mt-2">
            Choose Plan Description
          </Paragraph>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-12">
          {[1, 2, 3].map((item) => (
            <div className="col-span-12 lg:col-span-4 " key={item}>
              <div className=" border rounded-2xl">
                <div className=" p-6">
                  <div className="pb-3">
                    <H3 className="font-bold text-xl">Free</H3>
                    <Paragraph className="opacity-70 py-2">
                      This is the free plan
                    </Paragraph>
                    <Paragraph>$ 0</Paragraph>
                  </div>
                </div>
                <div className=" border-t-rounded-0 border-b-rounded-2xl p-6">
                  <div className="flex gap-3 ">
                    <div className="flex   font-bold">
                      <span
                        className="bg-[#D9E8FF]"
                        style={{
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <div className="flex justify-center items-center h-full text-3xl text-[#0098db] group-hover:text-white">
                          <HiCheck className="text-sm" />
                        </div>
                      </span>
                    </div>
                    <div>
                      <Paragraph>Post 20 Jobs</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex   font-bold">
                      <span
                        className="bg-[#D9E8FF]"
                        style={{
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <div className="flex justify-center items-center h-full text-3xl text-[#0098db] group-hover:text-white">
                          <HiCheck className="text-sm" />
                        </div>
                      </span>
                    </div>
                    <div>
                      <Paragraph>10 Featured Job</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex   font-bold">
                      <span
                        className="bg-[#D9E8FF]"
                        style={{
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <div className="flex justify-center items-center h-full text-3xl text-[#0098db] group-hover:text-white">
                          <HiCheck className="text-sm" />
                        </div>
                      </span>
                    </div>
                    <div>
                      <Paragraph>10 Highlights Job</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <div className="flex   font-bold">
                      <span
                        className="bg-[#D9E8FF]"
                        style={{
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        <div className="flex justify-center items-center h-full text-3xl text-[#0098db] group-hover:text-white">
                          <HiCheck className="text-sm" />
                        </div>
                      </span>
                    </div>
                    <div>
                      <Paragraph>500 Candidates Profile View</Paragraph>
                    </div>
                  </div>
                  <div className="pt-8">
                    <button className="py-2 font-bold flex w-full justify-center font-bold px-4 md:px-16 rounded-md border bg-[#EEF5FC]  hover:bg-[#0098db] text-[#0098db] hover:text-white">
                      Get Started
                      <HiArrowLongRight className="ml-2 text-3xl" />
                    </button>
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

export default Plan;
