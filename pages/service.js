import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import pro1 from "../public/Trust/CHILLIPEPPER.jpg";


const service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/product/product")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  }, []);
  console.log(data);
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

        <div className="flex flex-col md:flex-row justify-center md:flex-wrap">
        <div className="w-full bg-gray-50 mx-auto mt-10 rounded-sm  p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-pink-600 mb-2">
           Agriculture
          </h1>
          <div className="flex flex-col md:flex-row justify-center md:flex-wrap">
            {data.map((pro) => (
              <div key={pro.id}>
                <Card product={pro1} prod={pro} />
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default service;
