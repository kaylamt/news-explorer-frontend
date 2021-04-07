import React from 'react';

function Preloader(props) {
  return (
    <>
      {
        props.isShown &&
        < i className="circle-preloader" ></ i>
      }
    </>
  );
};

export default Preloader;