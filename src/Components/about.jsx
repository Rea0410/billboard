import React, { useEffect, useState } from 'react';
// import backgroundImage from '../assets/Sky-Outdoor-Billboard-Mockup-1.jpg'  <-- remove this

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        padding: '10px 10px',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: fadeIn ? 1 : 0,
        transition: 'opacity 1.2s ease',
        boxSizing: 'border-box',
        paddingTop: '50px',
        textAlign: 'center',
        
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: 40,
        }}
      >
        About ViewBear
      </h2>

      <p
        style={{
          maxWidth: '500px',
          fontSize: '1rem',
          lineHeight: '1.8',
          marginBottom: '60px',
        }}
      >
        ViewBear is committed to helping you connect with your future audience
        through strategic billboard placements. Our team delivers creative
        solutions that drive real results.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="#team"
          style={{
            backgroundColor: '#1e40af',
            color: '#fff',
            padding: '18px 50px',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(30, 64, 175, 0.3)',
            transition: 'background 0.3s',
          }}
        >
          Meet Our Team
        </a>

        <a
          href="#location"
          style={{
            backgroundColor: '#FFA500',
            color: '#fff',
            padding: '18px 50px',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
            transition: 'background 0.3s',
          }}
        >
          Our Location
        </a>
      </div>
    </div>
  );
};

export default About;
