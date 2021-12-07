

const service = () => {
  return (
    <div className="h-screen bg-gray-50 pb-10">
      <div className="pt-10">
        <nav className="p-4 bg-blue-800 mx-8 mb-10 rounded-xl drop-shadow-lg">
          <ul className="flex flex-row space-x-2 text-gray-100 pl-40 md:pl-0 font-semibold text-md items-center text-center justify-center overflow-x-scroll scrollbar-hide">
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Agriculture
            </li>
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Cosmetic and Fashion{" "}
            </li>
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Marketing And Trade
            </li>
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Manufacturing{" "}
            </li>
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Recycling
            </li>
            <li className=" active:bg-blue-700 hover:scale-105 cursor-pointer py-2 rounded-md px-1">
              Export And Import
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-gray-100 max-w-4xl mx-auto rounded-lg drop-shadow-lg py-10">
        <div className="flex flex-col md:flex-row justify-center md:flex-wrap">
          {/* <Card
            product={prod}
            name="Chilli Pepper"
            price="15.00"
            promo="20.00"
          /> */}
         
        </div>
      </div>
    </div>
  );
};

export default service;
