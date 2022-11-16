import "../styles/globals.css";
import { useState, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "../context/LoginModalContext";
import { LoginProvider } from "../context/LoginContext";
import { SigninMobileProvieder } from "../context/SignUpModalMobileContext";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <LoginProvider>
      <ModalProvider>
        <SigninMobileProvieder>
          <div>
            {loading ? (
              <h1 className="h-screen w-screen bg-black flex justify-center items-center">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <img
                    src="/Images/logosmall.svg"
                    className="animate-bounce h-24 w-24"
                  />
                  <Zoom>
                    <img src="/Images/logoname.svg" className="w-36" />
                  </Zoom>
                </div>
              </h1>
            ) : (
              <SessionProvider session={session}>
                <Component {...pageProps} />
              </SessionProvider>
            )}
          </div>
        </SigninMobileProvieder>
      </ModalProvider>
    </LoginProvider>
  );
}

export default MyApp;
