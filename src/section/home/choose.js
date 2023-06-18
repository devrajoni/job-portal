import { HiUserGroup } from "react-icons/hi2";
import { H1, H5, Paragraph } from "../../components/typography";

const content = [
  {
    icon: <HiUserGroup />,
    title: "Cost Effectivet",
    description:
      "Whether you choose to post your jobs directly or have them indexed automatically our pricing model is highly competitive and cost-effective",
  },
  {
    icon: <HiUserGroup />,
    title: "Quality Candidate",
    description:
      "We have created a streamlined user-interface so you can easily manage your jobs and candidates.",
  },
  {
    icon: <HiUserGroup />,
    title: "Easy to Use ",
    description:
      "Irrespective of your organization’s size, we have a large pool of candidates with diverse skill sets and experience levels.",
  },
];
function Choose() {
  return (
    <>
      <div className="bg-[#F1F2F4] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-center font-bold">
            <H1>
              Why Choose
              <span className="text-[#0098db] font-bold"> Jobpilot</span>
            </H1>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12 ">
            {content.map((item) => (
              <div className=" group col-span-6 lg:col-span-4">
                <div className="group-hover:bg-white card text-center flex h-full  p-6 gap-4 rounded-lg">
                  <div>
                    <div className="flex justify-center  items-center  font-bold">
                      <span
                        className="bg-white group-hover:bg-[#0098db]"
                        style={{
                          borderRadius: "100%",
                          width: "80px",
                          height: "80px",
                        }}
                      >
                        <div className=" flex justify-center items-center text-center h-full text-3xl text-[#0098db] group-hover:text-white">
                          {item.icon}
                        </div>
                      </span>
                    </div>
                    <div className="content pt-3 ">
                      <H5 className="font-bold">{item.title}</H5>
                      <Paragraph className="pt-2">{item.description}</Paragraph>
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

export default Choose;
