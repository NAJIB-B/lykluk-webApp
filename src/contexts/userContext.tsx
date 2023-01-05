
import React, { useState, createContext, useContext, useEffect, ReactNode } from "react";


type userContextType={
    user:string | null;
    setUser:React.Dispatch<React.SetStateAction<string | null>>;
}

type AuthProviderPropType = {
    children: ReactNode;
}

const AuthContext = createContext<userContextType| null>(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }:AuthProviderPropType) => {

const  [user , setUser] = useState<string|null>("")

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
