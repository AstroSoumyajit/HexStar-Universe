import React, { useContext, useState } from "react";
import { createContext } from "react";

const LoginContext = createContext();
export const LoginContextUpdate = createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }){
    const [userData, setUserData] = useState(null)

    function updateUserData({userData}) {
        setUserData(userData);
      }

    return (
        <LoginContext.Provider value={userData}>
            <LoginContextUpdate.Provider value={updateUserData}>
            {children}
            </LoginContextUpdate.Provider>
        </LoginContext.Provider>
    )
}
