
import React, { useState, createContext, useContext, useEffect, ReactNode } from "react";




const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

const  [user , setUser] = useState("")

  const authContextValue = {
   user,
   setUser
  };



  

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
