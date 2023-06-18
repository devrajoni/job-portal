function Signin() {
  return (
    <>
      <div className="bg-[#FFFFFF]  w-full">
        <div className="grid grid-cols-12  h-auto py-6 border px-6 md:px-12 lg:px-32 gap-8">
          <div className="col-span-12 md:col-span-6 ">
            <div className="md:flex gap-3">
              <div className="text-light pb-3 md:pb-0">
                <p>Logo</p>
              </div>
              {/* <div className="w-80  md:w-full border rounded-r-full ">
                <div className="relative  flex justify-between ">
                  <div className="flex h-full items-center text-[#2DB24A] py-3 pl-4">
                    <ImSearch />
                  </div>
                  <button className="py-2 gap-0 rounded-l-full px-4 md:px-8 font-bold bg-[#2DB24A] text-white">
                    Search
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 flex md:justify-end ">
            <div className="">
              <div>
                <div className="flex w-500 gap-3 mt-0 md:mt-3 lg:mt-0">
                  <button className="py-2 px-12 rounded font-bold border  hover:border-[#0098db] text-[#0098db]">
                    Sign In
                  </button>
                  <button className="py-2 px-12 rounded font-bold bg-[#0098db] text-white">
                    Post Job
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

export default Signin;
