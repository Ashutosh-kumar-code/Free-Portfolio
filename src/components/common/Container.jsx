import React from 'react';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={` mx-auto  container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;

