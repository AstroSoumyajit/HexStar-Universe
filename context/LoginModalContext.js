import React, { useContext, useState } from "react";

const ModalContext = React.createContext();
export const ModalUpdateContext = React.createContext();

export function useOpen() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  function toggleModal() {
    setOpen((openModal) => !openModal);
  }

  return (
    <ModalContext.Provider value={open}>
      <ModalUpdateContext.Provider value={toggleModal}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
}
