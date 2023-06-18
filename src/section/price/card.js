import { H3, Paragraph } from "../../components/typography";
function Card() {
  return (
    <>
      <div className=" bg-[#FFFF] pb-24 pt-12 px-6 md:px-12 lg:px-32">
        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12  lg:col-span-6 gap-6">
            <div className="flex items-center h-full">
              <div>
                <H3 className="text-xl font-bold">
                  Buy a premium subscription to post a job
                </H3>
                <Paragraph className="py-3">
                  Pay only for a single job creation, and you can also highlight
                  or featured them
                </Paragraph>
                <Paragraph className="text-[#0098db]">
                  Choose A Pricing Plan From Below.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-span-12  lg:col-span-6 ">
            <div className="bg-[#F7F7F8] p-8 border rounded-lg">
              <H3 className="text-xl font-bold">OR PAY PER JOB POST</H3>
              <Paragraph className="py-3">
                Pay only for a single job creation, and you can also highlight
                or featured them
              </Paragraph>
              <div className="pt-3">
                <button className="py-2 px-6 rounded font-bold bg-[#0098db] text-white">
                  Pay Per Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
