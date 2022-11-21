import React from 'react';
import {IoMdRocket} from 'react-icons/io';

const BoostButton = () => {
  function gotoTop () {
    window.scrollTo ({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="bg-white rounded-full" onClick={gotoTop}>
        <IoMdRocket style={{fontSize: '40px', margin: '5px'}} />
      </button>
    </div>
  );
};

export default BoostButton;
