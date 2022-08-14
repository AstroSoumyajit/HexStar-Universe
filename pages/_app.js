import '../styles/globals.css';
import {useState, useEffect} from 'react';
import Zoom from 'react-reveal/Zoom';

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState (true);

  useEffect (() => {
    setLoading (true);
    setTimeout (() => {
      setLoading (false);
    }, 2000);
  }, []);
  
  return (
    <div>
      {loading
        ? <h1 className="h-screen w-screen bg-black flex justify-center items-center">
            <div className='flex flex-col justify-center items-center space-y-4'>
              <img
                src="/Images/logosmall.svg"
                className="animate-bounce h-24 w-24"
              />
              <Zoom><img src="/Images/logoname.svg" className='w-36'/></Zoom>
            </div>
          </h1>
        : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
