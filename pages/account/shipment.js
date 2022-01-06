import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { appState } from "../../components/context/Context";

function Register() {
  const { dispatch, user } = appState();
  const router = useRouter();

  useEffect(() => {
    if (user.isAuthenticated === false) {
      router.push("/account/login");
    }
  }, []);
  console.log(user);
  const initialState = {
    country: "",
    city: "",
    address: "",
    zipcode: "",
    token: user.token,
  };
  const [formdata, setFormdata] = useState(initialState);
  const onChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios.post("/api/user/shipping", formdata, config).then((res) => {
      console.log(res.data);
    }).catch(err=>{
        alert(err.response.data.msg)
    })
  };
  return (
    <div className="bg-pink-900 py-20 z-100">
      <div className="w-full sm:max-w-2xl sm:mx-auto max-h-full  p-10 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold tracking-widest text-pink-900 text-center">
          Shipment Detail
        </h1>
        <div className=" items-center justify-center">
          <form onSubmit={onSubmit} className="flex flex-col space-y-2 py-4">
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={formdata.country}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={formdata.city}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={formdata.address}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="Zipcode"
              name="zipcode"
              value={formdata.zipcode}
              onChange={onChange}
              placeholder="Country Zipcode"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />

            <button
              type="submit"
              className="mt-2 px-8 py-2 text-lg text-white bg-green-700 rounded-lg hover:bg-green-600 active:bg-green-500 focus:ring-1 ring-green-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
