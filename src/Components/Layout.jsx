import React, { useState } from 'react';
import viewbearLogo from "../assets/asa.png";
import ContactUs from './contact-us';
import Footer from './footer';


const Layout = ({ children }) => {
  // NavLink component for hover effect on each link
  const NavLink = ({ href, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = {
      color: isHovered ? '#FFB703' : 'black', // hover color
      textDecoration: 'none',
      fontWeight: 500,
      borderBottom: isHovered ? '2px solid #FFB703' : 'none',
      transition: 'all 0.3s ease',
      paddingBottom: 4,
      cursor: 'pointer',
    };

    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <>
      {/* Small Top Navbar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#003566',
          color: 'white',
          padding: '10px 20px',
          fontSize: 20,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '30px',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <div>📞 256-627-624</div>
        <div style={{ backgroundColor: '#FFA500', color: 'black', padding: '5px 10px', borderRadius: '5px' }}>
          ✉️ viewbear@gmail.com
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          position: 'sticky',
          top: '50px', // adjust if needed
          zIndex: 999,
          backgroundColor: '#F8F9FA',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px 5px',
          fontSize: 15,
          color: 'black',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <a href="/">
          <img src={viewbearLogo} alt="ViewBear Logo" style={{ height: 100 }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
          <NavLink href="/about" label="ABOUT" />
          <NavLink href="/#products" label="PRODUCTS" />
          <NavLink href="/markets" label="MARKETS" />
          <NavLink href="/#gallery" label="GALLERY" />
          <NavLink href="/#ourteam" label="OUR TEAM" />
          <NavLink href="/#contactus" label="CONTACT US" />
        </div>
      </nav>

      {/* Render routed page content */}
      <div>{children}</div>

        {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
        <Footer />
    </>
  );
};

export default Layout;
