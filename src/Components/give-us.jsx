export default function CallUsSection() {
  return (
    <section
      style={{
        padding: "40px 20px",
        backgroundColor: "#003566",
        color: "white",
        textAlign: "center",
        borderRadius: 12,
        maxWidth: 600,
        margin: "40px auto",
        boxShadow: "0 8px 20px rgba(30, 64, 175, 0.4)",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>
        Give us a Call
      </h2>
      <p style={{ fontSize: "1.2rem", marginBottom: 24 }}>
        We can help you grow your business with outdoor,indoor or mobile advertising!
      </p>
      <a
        href="tel:+12562531440"
        style={{
          display: "inline-block",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#2563eb",
          padding: "12px 30px",
          borderRadius: 8,
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(37, 99, 235, 0.5)",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      >
        Call 256-627-624
      </a>
    </section>
  );
}
