import { BadgeCheckIcon, FingerPrintIcon, GlobeIcon, KeyIcon } from "@heroicons/react/solid";

const WhyTrust = () => {
  return (
    <div className="bg-gray-50 rounded-md p-8">
      <h1 className="font-thin text-3xl text-center capitalize ">why buy with <br /> </h1>
      <h1 className="font-bold text-3xl text-center text-pink-600 uppercase">trust faith ?</h1>
      <h3 className="text-center font-light text-xl capitalize mb-4"> expand Your market and increase your Income</h3>
      <div className="flex flex-col md:flex-row space-x-4 lg:space-y-10 space-y-4 text-center ">
        <div>
          {" "}<h1 className="font-bold capitalize text-center text-base mt-4">Total security <KeyIcon className="h-8 w-8 inline-flex text-pink-600" /></h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div>
          {" "}
          <h1 className="font-bold capitalize text-center text-base">Strong protection  <FingerPrintIcon className="h-8 w-8 inline-flex text-pink-600 m-1" /> </h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div>
          {" "}
          <h1 className="font-bold capitalize text-center text-base">Professional expertise  <BadgeCheckIcon className="h-8 w-8 text-pink-600 inline-flex" /> </h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div className="">
          {" "} <h1 className="font-bold capitalize text-center text-base">24/7 quality products  <GlobeIcon className="h-8 w-8 text-pink-600 inline-flex " /> </h1> 
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
      </div>
    </div>
  );
};

export default WhyTrust;
