import React from 'react';
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <div className="z-10">
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
