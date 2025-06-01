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
        About View Bear
      </h2>

      <p
        style={{
          maxWidth: '500px',
          fontSize: '1rem',
          lineHeight: '1.8',
          marginBottom: '60px',
        }}
      >
        View Bear is committed to helping you connect with your future audience
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
          href="/team"
          style={{
            backgroundColor: '#1e40af',
            color: '#fff',
            padding: '15px 20px',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1rem',
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
            padding: '15px 20px',
            borderRadius: '30px',
            fontWeight: 'bold',
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
            transition: 'background 0.3s',
          }}
        >
          Our Location
        </a>
      </div>
      <br />
      <br />
      
      <section
  id="features"
  style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}
>
  <h3 style={{ fontSize: '2rem', marginBottom: 40, color: '#1e3a8a' }}>
    Why Choose ViewBear?
  </h3>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      flexWrap: 'wrap',
    }}
  >
    <div style={{ maxWidth: 250 }}>
      <h4 style={{ color: '#111', fontSize: '1.2rem', marginBottom: 10 }}>Easy Booking</h4>
      <p style={{ color: '#555' }}>Book your billboard spots quickly and hassle-free.</p>
    </div>
    <div style={{ maxWidth: 250 }}>
      <h4 style={{ color: '#111', fontSize: '1.2rem', marginBottom: 10 }}>Real-Time Analytics</h4>
      <p style={{ color: '#555' }}>Track the performance of your ads with clear reports.</p>
    </div>
    <div style={{ maxWidth: 250 }}>
      <h4 style={{ color: '#111', fontSize: '1.2rem', marginBottom: 10 }}>Flexible Management</h4>
      <p style={{ color: '#555' }}>Manage multiple campaigns in one place.</p>
    </div>
  </div>
</section>

    </div>

    
  );
};

export default About;
