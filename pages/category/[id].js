import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import pro2 from "../../public/Trust/PINEAPPLE.jpg";
import SmallCard from "../../components/Card/SmallCard";
const singleCategory = () => {
  const router = useRouter();
  const { id } = router.query;

  const [related, setRelated] = useState([]);
  useEffect(() => {
    const body = { id: router.query.id };
    console.log(body);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //fetching all category products
    axios
      .post("/api/product/getCategory", body, config)
      .then((res) => {
        setRelated(res.data);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  }, [id]);
  console.log(related);

  
  return (
    <div className="bg-gray-50 h-full w-full">
      <div className="pb-10" />

      <div>
        <div className="font-bold font-sans my-20 justify-center text-center w-full mx-auto items-center">
          <h1 className="text-4xl text-pink-800 text-center">
            Related products
          </h1>
          <div className=" mx-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-w-5xl md:mx-auto mt-10 justify-center items-center">
            {related?.map((post) => (
              <div key={post.id}>
                <SmallCard image={pro2} title={post.productName} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleCategory;
