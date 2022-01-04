import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import pro2 from "../../public/Trust/PINEAPPLE.jpg";
import pro1 from "../../public/Trust/FRESHMUSHROOMS.jpg";
import Image from "next/image";
import { appState } from "../../components/context/Context";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../components/context/Types";
import SmallCard from "../../components/Card/SmallCard";
const singleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    discountPrice: "",
    id: "",
    cat: "",
    description: "",
    catId:"",
  });
  const {
    user: { cart },
    dispatch,
  } = appState();
  // const [catId, setCatId] = useState(""),
    const [related, setRelated] = useState([]);
  useEffect(() => {
    const body = { id: router.query.id };
    console.log(body);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // fechng main products
    axios
      .post("/api/product/singleProduct", body, config)
      .then((res) => {
        setProduct({
          productName: res.data.productName,
          productPrice: res.data.productPrice,
          discountPrice: res.data.discountPrice,
          id: res.data.id,
          cat: res.data.Category.catName,
          description: res.data.description,
          catId:res.data.category
        });
        console.log(res.data);
      })
      .catch((err) => {
        // alert(err.response.data.msg);
        console.log(err);
      });


      //fetching all related products 
      
    }, [id]);
    
      
      const [infi,setInfi] = useState(false)
       
        if(product.catId.length>0 && infi==false){
    
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const {catId} = product
          console.log(product.catId)
          const data = {
            id:catId
          }
          console.log(data)
        axios
          .post("/api/product/getCategory",data,config)
          .then((res) => {
            setRelated(res.data);
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
          setInfi(true)
        }
  
    

  console.log(product);
  console.log(related)
  return (
    <div className="bg-gray-50 h-full w-full">
      <div className="pb-10" />

      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full  md:h-[400px] md:w-[400px]">
          <Image src={pro1} laycolout="responsive" objectFit="contain" />
        </div>

        <div className="w-full md:w-1/2 p-2 justify-between">
          <span className="flex flex-col justify-center space-x-2 p-2 font-medium">
            <h1 className="font-bold text-3xl text-center capitalize text-pink-600 my-2 px-1 tracking-widest">
              {product.productName}
              <span className="text-sm font-thin"> {product.cat}</span>
            </h1>{" "}
            <span className=" flex flex-row space-x-2 justify-between mt-8">
              <h2 className=" text-center line-through bg-gray-600 rounded-lg text-gray-100 px-4 py-1">
                Ghc {product.discountPrice}.00
              </h2>
              <h2 className=" text-center bg-gray-600 rounded-lg text-gray-50 px-4 py-1 font-medium">
                Ghc {product.productPrice}.00
              </h2>
            </span>
            <div className="tracking-wider mt-8 text-lg">
              {product.description}
            </div>
            <span className="flex-col mt-20 justify-center">
              {cart?.some((c) => c.id === product.id) ? (
                <button
                  onClick={() => {
                    dispatch({
                      type: REMOVE_FROM_CART,
                      payload: product,
                    });
                  }}
                  className="bg-red-600 p-2 text-sm w-full hover:bg-red-500 rounded-md text-white"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch({
                      type: ADD_TO_CART,
                      payload: product,
                    });
                  }}
                  className="bg-green-600 p-2 text-sm w-full hover:bg-green-500 rounded-md text-white"
                >
                  Add To Cart
                </button>
              )}
            </span>
          </span>
        </div>
      </div>
      <div>
        <div className="font-bold font-sans my-20 justify-center text-center w-full mx-auto items-center">
          <h1 className="text-4xl text-pink-800 text-center">
            Related products
          </h1>
          <div className=" mx-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 max-w-5xl md:mx-auto mt-10 justify-center items-center">
            {
              related?.map(post=>(
                <div key={post.id}>

                  <SmallCard image={pro2} title={post.productName} />
                  </div>
              ))
            }
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleProduct;
