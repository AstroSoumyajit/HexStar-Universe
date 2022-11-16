import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
  signInMobile: false,
};

const SignInModalMobileContext = createContext(defaultValues);

export function useSigninMobile() {
  return useContext(SignInModalMobileContext);
}

export function SigninMobileProvieder({ children }) {
  const [signInMobile, setSignInMobile] = useState(defaultValues.signInMobile);

  const setSignInModalMobile = () => setSignInMobile(!signInMobile);

  return (
    <SignInModalMobileContext.Provider
      value={{ signInMobile, setSignInModalMobile }}
    >
      {children}
    </SignInModalMobileContext.Provider>
  );
}
