import { Fragment } from "react";

const Template = () => (
  <Fragment>
    <div className="grid grid-cols-12 grid-rows-6 gap-3 w-screen h-screen p-2 bg-gray-200">
      <div className="bg-gray-800 col-span-6">
        <p className="text-gray-100 text-lg">
          total earnings / total hrs spent / avg accuracy / avg pay per hr
        </p>
      </div>
      <div className="bg-gray-800 col-span-2">
        <p className="text-gray-100 text-lg">this week</p>
      </div>
      <div className="bg-gray-800 col-span-2">
        <p className="text-gray-100 text-lg">daily forecast</p>
      </div>
      <div className="bg-gray-800 col-span-2 row-span-6">
        <p className="text-gray-100 text-lg">task history</p>
      </div>



      <div className="bg-gray-800 col-span-10 row-span-3 p-5 flex flex-row">
        <div className="current m-auto">
          <p className="text-gray-400 text-sm">CURRENT TASK</p>

          <div className="flex flex-row">
            <div className="pr-5">
              <p className="text-white text-3xl">Falcon Extended Range</p>
              <p className="text-xs text-gray-300">PROJECT TYPE</p>
            </div>
            <div className="pr-5">
              <p className="text-white text-3xl">5a6de3ddcee3eobaf8</p>
              <p className="text-xs text-gray-300">TASK ID</p>
            </div>
          </div>

          <div className="flex flex-row pt-5">
            <div className="pr-5">
              <p className="text-white text-7xl">
                36:00 <small className="text-sm text-gray-500">hr : min</small>
              </p>
              <small className="text-sm text-gray-200">
                11:24 AM Tuesday 01-20-21
              </small>
              <p className="text-white text-xs text-gray-300">CLAIM TIME </p>
            </div>
            <div>
              <p className="text-white text-7xl">
                64:00 <small className="text-sm text-gray-500">hr : min</small>
              </p>
              <small className="text-sm text-gray-200">
                11:24 AM Tuesday 01-20-21
              </small>
              <p className="text-white text-xs text-gray-300">DEADLINE </p>
            </div>
          </div>


            <div className="mt-5">
                <textarea className="bg-yellow-50 text-gray-600 w-full p-1" style={{height:"9em"}}></textarea>
                <p className="text-white text-xs text-gray-300 ">NOTES </p>
            </div>

 
        </div>

        <div className="m-auto">
        <div>
            <p className="text-white text-2xl">9:00 AM Monday 1-19-20</p>
            <p className="text-xs text-gray-300">DATE STARTED</p>
          </div>
                <p className="text-white text-9xl">
                00:21 <small className="text-sm text-gray-500">hr : min</small>
                </p>
            <p className="text-xs text-gray-300">TIME SPENT</p>
            <button className="rounded-l-sm bg-blue-400 text-white w-1/3 py-2 mt-3 mx-auto">Start</button>
            <button className="bg-indigo-400 text-white w-1/3 py-2 mt-3 mx-auto">Pause</button>
            <button className="rounded-r-sm bg-red-400 text-white w-1/3 py-2 mt-3 mx-auto">Reset</button>
            <br/>
            <button className="rounded-sm bg-green-400 text-white w-full py-5 mt-3 text-lg">Next Task</button>

        </div>


      </div>




      <div className="bg-gray-800 col-span-10 row-span-2">
        <p className="text-gray-100 text-lg">search edit task</p>
      </div>
    </div>
  </Fragment>
);

export default Template;
