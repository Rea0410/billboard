import React, { useState, useEffect } from "react";

const ContactUs = () => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      id="contactus"
      style={{
        padding: "60px 20px",
        backgroundColor: "#f8f8f8",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          width: "100%",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        <h2
          style={{
            marginBottom: "24px",
            fontSize: "2rem",
            color: "#333",
            borderBottom: "2px solid #FFA500",
            display: "inline-block",
            paddingBottom: "8px",
          }}
        >
          Interested? Reach Out
        </h2>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Name</label>
            <input type="text" style={inputStyle} placeholder="Your name" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} placeholder="Your email" />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Message</label>
            <textarea
              rows="4"
              style={{ ...inputStyle, resize: "vertical" }}
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: "#FFA500",
              color: "#fff",
              padding: "12px 30px",
              border: "none",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: hover
                ? "0 6px 12px rgba(0, 0, 0, 0.2)"
                : "0 4px 8px rgba(0, 0, 0, 0.1)",
              transform: hover ? "scale(1.05)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  color: "#444",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  outline: "none",
};

export default ContactUs;
