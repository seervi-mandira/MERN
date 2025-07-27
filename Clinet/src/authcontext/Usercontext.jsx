// import { createContext, useContext } from "react";
// const authContext = createContext();
 

//  const AuthProvider = ({children}) =>{
// const storetokenInLS = (serverToken) =>{
//              localStorage.setItem('token', serverToken)
// }

// return (<authContext.Provider value={{storetokenInLS}}>
//              {children}
// </authContext.Provider>)
//  }

//   const useauth = () =>{
//              return useContext(authContext)
//   }

// //   export default  AuthProvider
// //   export default  useauth
// export default AuthProvider;
// export { useauth };






// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// const [token, settoken] = useState(localStorage.getItem('token'))
//  const UserProvider = ({children}) =>{

//   const storetokenInLS= (servertokenforauth ) =>{
//     return localStorage.setItem('token', servertokenforauth)
//   }

// let isloggedin =  !! token

// const Logoutuser = () =>{
//   settoken('')
// return localStorage.removeItem('token')
// }


//  return(
//   <UserContext.Provider value={{isloggedin,  storetokenInLS, Logoutuser }}>

//     {children}
//   </UserContext.Provider>
//  )
//  }


//  const useauth = () =>{
//    return useContext(UserContext)
//  }
// export { UserProvider, useauth };
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem("token"));

  const storetokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    settoken(serverToken);
  };

  const Logoutuser = () => {
    localStorage.removeItem("token");
    settoken('');
  };

  const isloggedin = !!token;

  return (
    <UserContext.Provider value={{token,  isloggedin, storetokenInLS, Logoutuser }}>
      {children}
    </UserContext.Provider>
  );
};

const useauth = () => {
  return useContext(UserContext);
};

export { UserProvider, useauth };
