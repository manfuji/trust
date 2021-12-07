import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { appState } from "../../components/context/Context";

function Register() {

  const {dispatch,user} = appState()
  const router = useRouter()

  useEffect(() => {
   if(user.isAuthenticated===true && user.isAdmin===false){
     router.push("/")
   }
  }, [])
  const initialState = {
    username:"",
    password:"",
    email:"",
    firstname:"",
    lastname:""

  }
  const [formdata,setFormdata] = useState(initialState)
  const onChange =(e)=>{
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value,
    })
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(formdata)
    const config = {
      headers:{
        "content-type":"application/json"
      }
    }
    axios.post("/api/user/user",formdata,config)
    .then(res=>{
      console.log(res.data)
    })

  }
  return (
    <div className="bg-pink-900 py-20">
      <div className="w-full sm:max-w-2xl sm:mx-auto max-h-full  p-10 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold tracking-widest text-pink-900 text-center">
          Register
        </h1>
        <div className=" items-center justify-center">
          <form onSubmit={onSubmit} className="flex flex-col space-y-2 py-4">
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={formdata.firstname}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
             <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={formdata.lastname}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formdata.username}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={onChange}
              placeholder="Email(very Important)"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={onChange}
              placeholder=" Password"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="confirm Password"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <button type="submit" className="mt-2 px-8 py-2 text-lg text-white bg-green-700 rounded-lg hover:bg-green-600 active:bg-green-500 focus:ring-1 ring-green-200">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
