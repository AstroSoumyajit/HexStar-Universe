import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
    openVerify: false,
};

const VerifyCertificateContext = createContext(defaultValues);

export function useVerifyModal() {
  return useContext(VerifyCertificateContext);
}

export function VerifyCertificateProvider({ children }) {
  const [openVerify, setOpenVerify] = useState(defaultValues.openVerify);

  return (
    <VerifyCertificateContext.Provider value={{ openVerify, setOpenVerify }}>
      {children}
    </VerifyCertificateContext.Provider>
  );
}
