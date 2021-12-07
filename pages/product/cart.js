import SmallCard from "../../components/Card/SmallCard";
import { appState } from "../../components/context/Context";
import prod from "../../public/Trust/CASSAVA.jpg";
import Image from "next/image";
import { DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_CART } from "../../components/context/Types";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
const cart = () => {
  const {
    user: { cart },
    dispatch,
  } = appState();

  let total_price = 0
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].qty;
    total_price +=cart[i].productPrice * cart[i].qty;
  }


  return (
    <div className="h-screen w-full bg-gray-50">
      <div className="flex lg:flex-row flex-col mb-20 lg:mb-0 justify-between">
        <div className="pb-10" />
      {cart.length > 0 ? (
     
        <div className="flex-1 w-full">
        <div className="pb-10" />

          <div className="bg-gray-100 max-w-4xl mx-auto justify-center h-full ml-10 pt-10 rounded shadow-md ">
            <span className="font-semibold text-center justify-center pb-10 ml-10 uppercase tracking-widest text-pink-600 text-xl align-middle">SELECTED PRODUCTS</span>

          {cart.map((product) => (
            <>
              <div key={product.id} className=" max-w-xl mx-auto justify-center items-center h-20 flex flex-row hover:bg-gray-100 hover:ring-1 ring-gray-300 rounded-md mb-10">
                <div className="relative h-20 w-16 rounded-md hover:shadow-md items-center justify-center drop-shadow-md">
                  <Image
                    src={prod}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md  z-0"

                  />
                </div>
                <div className="flex flex-row justify-between space-x-6 px-2 pt-2 font-medium">
                  <span className="font-semibold text-pink-600">
                    {product.productName}{"  "}
                  </span>{" "}
                  <span className="text-gray-500">Ghc {product.productPrice}</span>
                  <span className="text-gray-500">qty:  {product.qty}</span>

                 
                  <div className=" space-x-6">
                    <a
                      className="text-green-800 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({type:INCREASE_QTY,payload:{
                          id:product.id
                        }})
                        console.log(product.id)
                      }}
                    >
                      <PlusIcon className="h-5 w-5 font-extrabold inline-flex text-xl" />
                    </a>
                    <a
                      className="font-extrabold text-xl text-red-800 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({type:DECREASE_QTY,payload:{
                          id:product.id
                        }})
                        console.log(product.id)
                      }}center
                    >
                      <MinusIcon className="h-5 w-5 font-extrabold inline-flex text-xl" />
                    </a>
                  </div>
                  <span className="flex-col">
                    {cart.some((c) => c.id === product.id) ? (
                      <button
                        onClick={() => {
                          dispatch({
                            type: REMOVE_FROM_CART,
                            payload: product,
                          });
                        }}
                        className="bg-red-600 p-2 text-sm w-full hover:bg-red-500 rounded-md text-white"
                      >
                        Remove 
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
                </div>
              </div>
            </>
          ))}

        </div>
        </div>
      ) : (
        <div>
          <div className="pb-10" />
          <div className=" h-48 rounded-md text-2xl justify-center items-center font-bold text-pink-600 p-2 bg-gray-200 lg:mr-52 xl:mr-56">
            <span>
              Please there is not item in the cart for you...Kindly add one
            </span>
          </div>
        </div>
     
      )}

{cart.length>0?(<div className="">
          <div className="pb-10" />
          <div className=" mx-10 h-64 py-4 flex flex-col max-w-2xl capitalize items-center justify-between  rounded-md text-xl font-normal text-pink-600 p-2 bg-gray-100">
            <span>
              total quantity: {total}
              
            </span>

            <span>
            total Price: Ghc {total_price}.00
            </span>
          <button className="justify-center items-center w-42 rounded py-2 px-20 mx-20 bg-green-600 text-white font-normal">Checkout</button>

          </div>
        </div>):("")}
        </div>

{cart.length>0?(

      
          <div className="pt-10 max-w-3xl mx-auto mt-10" >
          <div className=" h-48 w-full flex-1 mx-auto rounded-md text-2xl justify-center font-bold text-pink-600 p-2 bg-gray-100">
            <span>
              Related Products
            </span>
            <div>
              
            </div>
          </div>
        </div>
):("")}

    </div>
  );
};

export default cart;
