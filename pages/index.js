import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import SmallCard from "../components/Card/SmallCard";
import HeroImage from "../components/HeroImage";
import SpecialProduct from "../components/SpecialProduct";
import prod from "../public/Trust/CASSAVA.jpg";
import pro1 from "../public/Trust/CHILLIPEPPER.jpg";
import { appState } from "../components/context/Context";
import Story from "../components/component/Story";
import ExportPortal from "../components/component/exportPortal";
import BuyersAndsellers from "../components/component/buyersAndsellers";
import GlobalProducts from "../components/component/globalProducts";
import WhyTrust from "../components/component/whyTrust";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { dispatch, user } = appState();
  const [data, setData] = useState([]);


  console.log(user);
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
    <div className=" min-h-screen py-2 bg-white">
      <Head>
        <title>Faith Trust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroImage />
      <main className="w-full my-20">
        <div className="w-full">
          <div className="md:max-w-5xl bg-gray-50 text-gray-900 mx-auto h-full p-20 rounded-sm shadow-lg">
            <h1 className="text-4xl font-bold mb-3 text-pink-600">
              Featured products
            </h1>
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-2"
              data-aos="fade-up-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {data.map((pro) => (
                <div key={pro.id}>
                  <SmallCard
                    image={require(`../public/uploads/${pro.imageUrl}`).default}
                    title={pro.productName}
                    cat={pro?.Category?.catName}
                  />
                </div>
              ))}
              <SmallCard image={prod} title="Cassava" cat="Farm Produce" />
            </div>
          </div>
        </div>

        {/* Special Product */}
        <div
          className="max-w-4xl bg-gray-50 mx-auto mt-10 rounded-sm  hover:bg-gray-100 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <SpecialProduct />
        </div>
        {/* a big card for sales and information  */}
        <div className="max-w-5xl bg-gray-50 mx-auto mt-10 rounded-sm  p-10 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-pink-600">
            Products And Services
          </h1>
          <div
            className="flex flex-col md:flex-row justify-center md:flex-wrap"
            data-aos="zoom-up-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {data.map((pro) => (
              <div key={pro.id}>
                <Card product={pro1} prod={pro} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-5xl mx-auto mt-24">
          {/* story component */}
          <div>
            <Story />
          </div>
          {/* why trust
           */}
          <div
            className="mt-10"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <WhyTrust />
          </div>
          {/* export story */}
          <div className="mt-10">
            <ExportPortal />
          </div>
          {/* sellers and buyers */}
          <div
            className="mt-10"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <BuyersAndsellers />
          </div>
          {/* globalizations */}
          {/* why trust company */}

          <div
            className="flex flex-col justify-center max-w-5xl mx-auto mt-24"
            //  data-aos={"fade-left"}
            //  data-aos-easing={"linear"}
            //  data-aos-duration={"1500"}
          >
            <GlobalProducts />
          </div>
        </div>
      </main>
    </div>
  );
}
