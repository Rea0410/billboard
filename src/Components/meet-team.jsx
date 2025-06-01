import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Product",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Sam Lee",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/100?img=3",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "60px 20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {teamMembers.map((member) => (
        <div
          key={member.name}
          style={{
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: 25,
            width: 240,
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.3s",
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            style={{
              height: 110,
              width: 110,
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: 15,
            }}
          />
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "1.4rem",
              color: "#1e3a8a",
            }}
          >
            {member.name}
          </h3>
          <p style={{ margin: 0, color: "#555", fontSize: "1rem" }}>
            {member.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
