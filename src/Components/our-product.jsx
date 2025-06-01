
import outdoor from '../assets/outdoor.png';
import outdoor1 from '../assets/outdoor1.png';
import indoor from '../assets/indoor.png'; 
import indoor1 from '../assets/indoor1.png';



const cardData = [
  {
    title: "Outdoor Billboard",
    image: outdoor, 
    description: "Large-format ads for highways and high-traffic areas.",
  },
  {
    title: "Indoor LED Display",
    image: indoor, 
    description: "Perfect for malls and event venues.",
  },
  {
    title: "Mobile Billboard",
    image: outdoor1, 
    description: "Billboards on wheels for maximum city exposure.",
  },

  {
    title: "Mobile Billboard",
    image: indoor1, 
    description: "Billboards on wheels for maximum city exposure.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      style={{
        padding: "60px 20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#1e40af",
          fontSize: "2.5rem",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Our Products
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {cardData.map(({ title, image, description }) => (
          <div
            key={title}
            style={{
              position: "relative",
              width: 220,
              height: 320,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
              cursor: "default",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: 24,
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                zIndex: 1,
              }}
            ></div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "1.6rem",
                  fontWeight: "600",
                }}
              >
                {title}
              </h3>
              <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.5 }}>
                {description}
              </p>
              <button
                onClick={() => alert(`Viewing more about ${title}`)}
                style={{
                  marginTop: 16,
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  backgroundColor: "#1e40af",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
