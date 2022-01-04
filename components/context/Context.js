import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducers } from "./reducers";

const appData = createContext();
const Context = ({ children }) => {
  const [user, dispatch] = useReducer(Reducers, {
    token: "",
    cart: [],
    isAuthenticated: false,
    isAdmin: false,
    username:"",
    profilePic:"",
    // userDetails: {},
  });
  // useEffect(() => {
  //  localStorage.setItem("user",JSON.stringify(user))
  // }, [user])

  return (
    <appData.Provider value={{ user, dispatch }}>{children}</appData.Provider>
  );
};

export default Context;

export const appState = () => {
  return useContext(appData);
};
