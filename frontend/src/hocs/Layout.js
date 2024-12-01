// src/hocs/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        {/* Navbar or any other layout structure */}
      </nav>
      <main>{children}</main>  {/* This renders the matched route's component */}
    </div>
  );
};

export default Layout;
