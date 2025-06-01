import React from 'react';

import outdoor1 from '../assets/outdoor1.png';
import indoor from '../assets/indoor.png'; // this line must point to a real file
import indoor1 from '../assets/indoor1.png';


const galleryImages = [
  indoor,

  outdoor1,
  indoor1, 
];

export default function InspirationGallery() {
  return (
    <section
      style={{
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#1e40af",
          marginBottom: 40,
        }}
      >
        Inspiration Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {galleryImages.map((url, index) => (
          <div
            key={index}
            style={{
              overflow: "hidden",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                transition: "transform 0.4s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
