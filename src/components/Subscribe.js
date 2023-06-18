import { Paragraph } from "./typography";
function Subscribe() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="grid grid-cols-12 gap-6 py-12 px-6 md:px-12 lg:px-32   text-left">
          <div className="col-span-12 md:col-span-12 lg:col-span-6 md:text-xs">
            <div className="md:flex gap-4 pl-16 lg:pl-0">
              <div className=" mb-3 md:mb-0">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 rounded px-8 text-center bg-black border border-[#0098db]"
                />
              </div>
              <button className="py-3 rounded px-20  font-bold bg-[#0098db] text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-2 md:text-xs">
            <div className="text-center">
              <div>
                <Paragraph className="font-bold">3</Paragraph>
                <Paragraph className="font-bold opacity-70">Live Job</Paragraph>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-2 md:text-xs">
            <div className="text-center">
              <div>
                <Paragraph className="font-bold">17</Paragraph>
                <Paragraph className="font-bold opacity-70">
                  Companies
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 lg:col-span-2 md:text-xs">
            <div className="text-center">
              <div>
                <Paragraph className="font-bold">34</Paragraph>
                <Paragraph className="font-bold opacity-70">
                  Candidates
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
        <hr className=" text-2xl  bg-slate-400 opacity-30" />
      </div>
    </>
  );
}

export default Subscribe;
