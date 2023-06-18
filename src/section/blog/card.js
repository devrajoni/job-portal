import { HiOutlineBriefcase, HiOutlineChat } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import Blog1 from "../../assets/blog1.jpg";
import Radio from "../../components/Radio";
import { H3, Paragraph } from "../../components/typography";
function Card() {
  return (
    <>
      <div className=" bg-[#F7F7F8] pb-24 pt-12 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 lg:col-span-4  ">
            <div className=" border rounded-2xl">
              <div className=" p-6">
                <div className="pb-3">
                  <H3 className="font-bold text-xl">Search</H3>
                </div>
                <div className="border  bg-white">
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-center py-3 w-full"
                  />
                </div>
              </div>
              <div className="border p-6">
                <div className="pb-4">
                  <H3 className="font-bold text-xl pb-3">Category</H3>
                  <Radio name="All Category" id="cat" type="checkbox" />
                  <Radio name="Engineer/Architects" id="cat" type="checkbox" />
                  <Radio name="Garments/Textile" id="cat" type="checkbox" />
                  <Radio name="Design/Creative" id="cat" type="checkbox" />
                </div>
                <button className=" gap-0 py-2 px-6 rounded font-bold bg-[#0098db] text-white">
                  Filter
                </button>
              </div>
            </div>
            <div className=" border rounded-2xl mt-8">
              <div className=" p-6">
                <div className="pb-3 pt-3">
                  <H3 className="font-bold text-xl">Recent Post</H3>
                </div>
                {[1, 2, 3, 4].map((item) => (
                  <div className="grid grid-cols-12 gap-6 mb-6">
                    <div
                      className="col-span-12 md:col-span-6 lg:col-span-6"
                      key={item}
                    >
                      <img src={Blog1} alt="logo1" className="rounded-lg" />
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
                      <div className="flex items-center h-full">
                        <div>
                          <Paragraph className="opacity-30">
                            Jun 10, 2023 5 Comments
                          </Paragraph>
                          <Paragraph>
                            Ut et doloribus cupiditate eum optio aut temporibus
                            et delectus sequi.
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12  lg:col-span-8 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="group-hover:drop-shadow-2xl card bg-white p-4 border group-hover:border-[#0098db] gap-4 rounded-lg w-full mb-6 "
                key={item}
              >
                <div className="grid grid-cols-12 gap-6 ">
                  <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
                    <div className="">
                      <img src={Blog1} alt="logo1" className="rounded-lg" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6 pr-4 ">
                    <div className="flex h-full items-center">
                      <div>
                        <div className="flex  gap-3 mb-2">
                          <div className="flex gap-2">
                            <HiOutlineBriefcase className="mt-1 text-[#0098db]" />
                            <Paragraph>Jun 10, 2023</Paragraph>
                          </div>
                          <div className="flex gap-2">
                            <HiOutlineChat className="mt-1 text-[#0098db]" />
                            <Paragraph>5 Comments</Paragraph>
                          </div>
                        </div>
                        <div>
                          <H3 className="font-bold text-xl mb-3">
                            Consequatur optio incidunt inventore nisi.
                          </H3>
                          <Paragraph className="opacity-50">
                            Ut et doloribus cupiditate eum optio aut temporibus
                            et delectus sequi.
                          </Paragraph>
                          <div>
                            <Paragraph className="flex mt-3 text-[#0098db]">
                              View Resume
                              <HiArrowLongRight className="ml-1 text-2xl" />
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
