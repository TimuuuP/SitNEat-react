import React, { Component } from 'react';

const Slides = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: '50% 60%'
  }

  return (
    <div className='slides' style={styles}>
      
    </div>
  );
}

export default Slides;
