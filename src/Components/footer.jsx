import React from "react";
import viewbearLogo from "../assets/asa.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#F8F9FA",
        color: "black",
        padding: "30px 20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "30px",
        fontFamily: "Roboto, sans-serif",
        fontSize: 15,
      }}
    >
      {/* Logo & Company Name */}
      <div style={{ flex: "1 1 250px" }}>
        <img src={viewbearLogo} alt="Logo" style={{ height: 100 }} />
      </div>

      {/* Social Media */}
      <div style={{ flex: "1 1 200px" }}>
        <h4>Follow Us</h4>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Facebook</a></li>
          <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Twitter</a></li>
          <li><a href="#" style={{ color: "black", textDecoration: "none" }}>LinkedIn</a></li>
          <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Instagram</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div style={{ flex: "1 1 250px" }}>
        <h4>Contact Info</h4>
        <p style={{ margin: "8px 0" }}>📞 256-627-624</p>
        <p style={{ margin: "8px 0" }}>✉️ viewbear@gmail.com</p>
        <p style={{ margin: "8px 0" }}>📍 711 Signal Mountain Rd, #203 Chattanooga, TN 37405</p>
      </div>

      {/* Helpful Links */}
      <div style={{ flex: "1 1 200px" }}>
        <h4>Helpful Links</h4>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
          <li><a href="about" style={{ color: "black", textDecoration: "none" }}>About</a></li>
          <li><a href="products" style={{ color: "black", textDecoration: "none" }}>Products</a></li>
          <li><a href="markets" style={{ color: "black", textDecoration: "none" }}>Markets</a></li>
          <li><a href="contactus" style={{ color: "black", textDecoration: "none" }}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
