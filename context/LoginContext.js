import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
  userData: null,
  setIsAdmin: () => {},
};

const LoginContext = createContext(defaultValues);

export function useLogin() {
  return useContext(LoginContext);
}

export function LoginProvider({ children }) {
  const [userData, setUserData] = useState(defaultValues.userData);

  return (
    <LoginContext.Provider value={{ userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
}
