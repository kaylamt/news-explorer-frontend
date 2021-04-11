import React from 'react';

function Preloader(props) {
  return (
    <>
      {
        props.isShown &&
        < i className="circle-preloader" ></ i>
      }
      <p className="preloader__text">Searching for news...</p>
    </>
  );
};

export default Preloader;