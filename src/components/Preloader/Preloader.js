import React from 'react';

function Preloader(props) {
  return (
    <>
      {
        props.isShown &&
        < i class="circle-preloader" ></ i>
      }
    </>
  );
};

export default Preloader;