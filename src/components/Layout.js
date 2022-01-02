import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="background-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
