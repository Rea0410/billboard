// import React, { useState } from "react";
// import BillboardMap from '../Components/billboardMaps';
// import viewbearLogo from "../assets/asa.png";
// import Vimage from "../assets/Vimage.png";
// import Logo from "../assets/VBear.png"
// import outdoorImg from "../assets/outdoor.png"; // Place your outdoor billboard image here
// import indoorImg from "../assets/indoor.jpg"; // Place your indoor billboard image here
// import mobileImg from "../assets/mobil.png"; // Place your mobile billboard image here

// const FrontPage = () => {
//   const [showProducts, setShowProducts] = useState(false);
//   const [showOutdoorModal, setShowOutdoorModal] = useState(false);

//   const inputStyle = {
//   width: "100%",
//   padding: 10,
//   borderRadius: 4,
//   border: "1px solid #ccc",
// };

//   const cardData = [
//     {
//       title: "Outdoor Billboard",
//       image: outdoorImg,
//       description: "Your brand deserves the spotlight.",
      
//     },
//     {
//       title: "Indoor Billboard",
//       image: indoorImg,
//       description: "Indoor visibility. Infinite possibilities..",
//     },
//     {
//       title: "Mobile Billboard",
//       image: mobileImg,
//       description: "Your brand, on the move!",
//     },
//   ];
//   const billboards = [
//   {
//     id: 3,
//     name: "Mobile Billboard - Alabama",
//     location: "Alabama, USA",
//     lat: 34.3999386,
//     lng: -87.7518197,
//     details: "Digital mobile unit, Route 5, Price: $400/week"
//   }
// ];

//   return (
//     <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
//       {/* Small Top Navbar */}
//       <div
//         style={{
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     backgroundColor: "rgb(30,64,175)", // also fixed missing closing parenthesis
//     color: "white",
//     padding: "10px 30px",
//     fontSize: 50, // padako ang font
//     display: "flex",
//     justifyContent: "flex-end",
//     gap: "30px",
//     alignItems: "center",
//     fontFamily: "Roboto, sans-serif"

//   }}
//       >
//         <div>📞 256-627-624</div>
//         <div>✉️ viewbear@gmail.com</div>
//       </div>

//       {/* Main Navbar */}
//       <nav
//         style={{
//           position: "sticky",
//           top: "42px", // height of top bar to prevent overlap
//           zIndex: 999,
//           backgroundColor: "#f5f7fa",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "30px 30px",
//           fontSize: 30, // padako ang font
//           color: "white",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           gap: "50px",
//           fontFamily: "Roboto, sans-serif"


//         }}
//       >
//         <a href="/">
//           <img src={viewbearLogo} alt="ViewBear Logo" style={{ height: 100 }} />
//         </a>
//         <div>
//           <div style={{ display: "flex", alignItems: "center", gap: 100 }}>
//             <a
//               href="#about"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               ABOUT
//             </a>

   
//             <a
//               href="#products"
//               style={{
//                 textDecoration: "none",
//                 fontWeight: 500,
//                 color: "black",
//               }}
//             >
//               PRODUCTS
//             </a>
//             <a
//               href="#markets"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               MARKETS
//             </a>
//             <a
//               href="#gallery"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               GALLERY
//             </a>
//             <a
//               href="#ourteam"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               OUR TEAM
//             </a>
//             <a
//               href="#contactus"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               CONTACT US
//             </a>
//             {/* <a
//               href="#faq"
//               style={{
//                 color: "black",
//                 textDecoration: "none",
//                 fontWeight: 500,
//               }}
//             >
//               FAQ
//             </a> */}
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     minHeight: "90vh",
//     backgroundImage: `url(${Vimage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     color: "#fff",
//     padding: "0 40px",
//     position: "relative",
//     fontFamily: "Roboto, sans-serif",
//   }}
// >
//   <div style={{ maxWidth: "800px", marginLeft: "8%" }}>
//     <h5
//       style={{
//         fontSize: "2.5rem",
//         marginBottom: "60px",
//         lineHeight: 1.4,
//       }}
//     >
//       <span>The ViewBear team brings expert strategy</span> <br />
//       <span>and insight to help you connect</span> <br />
//       <span>with your future audience.</span>
//     </h5>

//     <a
//       href="#contactus"
//       style={{
//         backgroundColor: "#22c55e",
//         color: "white",
//         padding: "14px 36px",
//         borderRadius: "30px",
//         fontWeight: "bold",
//         textDecoration: "none",
//         fontSize: "1.1rem",
//         boxShadow: "0 4px 6px rgba(34, 197, 94, 0.5)",
//       }}
//     >
//       CONTACT US
//     </a>
//   </div>
// </section>


//       {/* Features Section
//       <section
//         id="features"
//         style={{ padding: '60px 20px', textAlign: 'center' }}
//       >
//         <h3 style={{ fontSize: '2rem', marginBottom: 40 }}>
//           Why Choose ViewBear?
//         </h3>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '40px',
//             flexWrap: 'wrap',
//           }}
//         >
//           <div style={{ maxWidth: 250 }}>
//             <h4>Easy Booking</h4>
//             <p>Book your billboard spots quickly and hassle-free.</p>
//           </div>
//           <div style={{ maxWidth: 250 }}>
//             <h4>Real-Time Analytics</h4>
//             <p>Track the performance of your ads with clear reports.</p>
//           </div>
//           <div style={{ maxWidth: 250 }}>
//             <h4>Flexible Management</h4>
//             <p>Manage multiple campaigns in one place.</p>
//           </div>
//         </div>
//       </section> */}

//       {/* about */}
      

// <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
//   <h1
//     style={{
//       textAlign: "center",
//       marginBottom: 50,
//       color: "#1e40af",
//       fontSize: "4rem", // Mas readable sa tanang screen
//       fontWeight: "bold",
//       letterSpacing: "1px",
//     }}
//   >
//     Our Team
//   </h1>

//   <div
//     style={{
//       display: "flex",
//       gap: "40px",
//       flexWrap: "wrap",
//       justifyContent: "center",
//     }}
//   >
//     {[
//       {
//         name: "Alex Johnson",
//         role: "Founder & CEO",
//         image: "https://i.pravatar.cc/100?img=1",
//       },
//       {
//         name: "Maria Rodriguez",
//         role: "Head of Product",
//         image: "https://i.pravatar.cc/100?img=2",
//       },
//       {
//         name: "Sam Lee",
//         role: "Lead Developer",
//         image: "https://i.pravatar.cc/100?img=3",
//       },
//     ].map((member) => (
//       <div
//         key={member.name}
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: 10,
//           padding: 25,
//           width: 240,
//           textAlign: "center",
//           backgroundColor: "#fff",
//           boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
//           transition: "transform 0.3s",
//         }}
//       >
//         <img
//           src={member.image}
//           alt={member.name}
//           style={{
//             height: 110,
//             width: 110,
//             borderRadius: "50%",
//             objectFit: "cover",
//             marginBottom: 15,
//           }}
//         />
//         <h3 style={{ margin: "0 0 8px 0", fontSize: "1.4rem", color: "#1e3a8a" }}>
//           {member.name}
//         </h3>
//         <p style={{ margin: 0, color: "#555", fontSize: "1rem" }}>
//           {member.role}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>


//       {/* Products */}

// <section
//   id="products"
//   style={{ padding: "60px 20px", textAlign: "center" }}
// ></section>

// <div
//   style={{
//     padding: "60px 20px",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   }}
// >
//   {/* Title */}
//   <h1
//     style={{
//       textAlign: "center",
//       marginBottom: 30,
//       color: "#1e40af",
//       fontSize: "2.5rem",
//       fontWeight: "bold",
//       letterSpacing: "1px",
//     }}
//   >
//     Our Products
//   </h1>

//   {/* Container for cards */}
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       gap: "30px",
//       flexWrap: "wrap",
//     }}
//   >
//     {cardData.map(({ title, image, description }) => (
//       <div
//         key={title}
//         style={{
//           position: "relative",
//           width: 200,
//           height: 300,
//           borderRadius: 20,
//           overflow: "hidden",
//           boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
//           cursor: "default",
//           color: "white",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: 24,
//           backgroundImage: `url(${image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           transition: "transform 0.3s ease",
//         }}
//         onMouseEnter={(e) =>
//           (e.currentTarget.style.transform = "scale(1.03)")
//         }
//         onMouseLeave={(e) =>
//           (e.currentTarget.style.transform = "scale(1)")
//         }
//       >
//         {/* Overlay */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
//             zIndex: 1,
//           }}
//         ></div>

//         {/* Content */}
//         <div style={{ position: "relative", zIndex: 2 }}>
//           <h3
//             style={{
//               margin: "0 0 10px",
//               fontSize: "1.8rem",
//               fontWeight: "600",
//             }}
//           >
//             {title}
//           </h3>
//           <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.5 }}>
//             {description}
//           </p>

//           {/* View Button */}
//           <button
//             onClick={() => alert(`Viewing more about ${title}`)}
//             style={{
//               marginTop: 16,
//               padding: "10px 20px",
//               borderRadius: 8,
//               border: "none",
//               backgroundColor: "#1e40af",
//               color: "#fff",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//           >
//             View More
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

// {/* Billboard Maps */}

// <div>
//       <h2 className="text-xl font-bold mb-4">Billboard Map</h2>
//       <BillboardMap />
//     </div>


//     {/* FAQ */}
//  <section 
//   id="faq"
//   style={{
//     padding: '60px 20px',
//     textAlign: 'center',
//     backgroundColor: '#e0f2fe' // Light blue background
//   }}
// >
//   <h3 style={{ fontSize: '2rem', marginBottom: 40 }}>
//     Why Choose ViewBear?
//   </h3>
//   <div
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '40px',
//       flexWrap: 'wrap',
//     }}
//   >
//     <div style={{ maxWidth: 250 }}>
//       <h4>Easy Booking</h4>
//       <p>Book your billboard spots quickly and hassle-free.</p>
//     </div>
//     <div style={{ maxWidth: 250 }}>
//       <h4>Real-Time Analytics</h4>
//       <p>Track the performance of your ads with clear reports.</p>
//     </div>
//     <div style={{ maxWidth: 250 }}>
//       <h4>Flexible Management</h4>
//       <p>Manage multiple campaigns in one place.</p>
//     </div>
//   </div>
// </section>


//       {/* Contact Us */}
//       <section
//   id="contactus"
//   style={{
//     padding: '60px 20px',
//     backgroundColor: '#f5f5f5',
//     textAlign: 'center',
//   }}
// >
//   <div style={{ maxWidth: 1000, margin: '0 auto' }}>
    

//     {/* FLEX ROW */}
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: 40,
//         justifyContent: 'space-between',
//         textAlign: 'left',
//       }}
//     >
//       {/* LEFT SIDE */}
// <div
//   style={{
//     flex: 1,
//     minWidth: 300,
//     textAlign: 'center',   // center text horizontally
//     paddingRight: 20,      // optional
//     display: 'flex',       // enable flexbox to center vertically
//     flexDirection: 'column',
//     justifyContent: 'center', // vertical centering
//     alignItems: 'center',     // horizontal centering for children
//     height: '100%',            // make sure container fills the height of its parent
//   }}
// >
//   <p style={{ fontSize: '2rem', marginBottom: 20, marginTop: 0 }}>
//     Billboards that speak louder
//   </p>
//   <p style={{ color: '#555', lineHeight: '1.5' }}>
//     Looking to make an impact with outdoor advertising?
// At ViewBear, we specialize in out-of-home advertising that gets results.
// We know what grabs attention—and what gets ignored.

// 📞 Reach out to ViewBear today to see how billboard advertising can grow your business.
//   </p>
// </div>

//       {/* RIGHT SIDE - FORM */}
//      <div style={{ flex: 1, minWidth: 300 }}>
//   <h1
//     style={{
//       marginBottom: 40,
//       color: '#1e40af',
//       fontSize: '2.5rem',
//       fontWeight: 'bold',
//       letterSpacing: '1px',
//       textAlign: 'center',  // explicitly left align
//     }}
//   >
//     Contact Us
//   </h1>
//       <form
//         style={{
//           flex: 1,
//           minWidth: 300,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 16,
//         }}
//       >
//         <div style={{ display: 'flex', gap: 10 }}>
//           <div style={{ flex: 1 }}>
//             <label>First Name</label>
//             <input type="text" placeholder="First" style={inputStyle} />
//           </div>
//           <div style={{ flex: 1 }}>
//             <label>Last Name</label>
//             <input type="text" placeholder="Last" style={inputStyle} />
//           </div>
//         </div>
//         <div>
//           <label>Phone</label>
//           <input type="text" placeholder="Phone" style={inputStyle} />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="email" placeholder="Email" style={inputStyle} />
//         </div>
//         <div>
//           <label>Message</label>
//           <textarea placeholder="Leave a Message" rows="4" style={inputStyle} />
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#1e40af',
//             color: 'white',
//             border: 'none',
//             borderRadius: 5,
//             cursor: 'pointer',
//           }}
//         >
//          Submit
//         </button>
//       </form>
//     </div>
//     </div>
//   </div>
// </section>


//       {/* Footer */}
//       <footer
//   style={{
//     backgroundColor: "#e5e7eb",
//     color: "black",
//     padding: "40px 20px",
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//     gap: "30px",
//   }}
// >
//   {/* Logo & Company Name */}
//   <div style={{ flex: "1 1 250px" }}>
//     <img src={Logo} alt="Logo" style={{ height: 70 }} />
//     <h3 style={{ margin: 0 }}>View Bear</h3>
//   </div>

//   {/* Social Media */}
//   <div style={{ flex: "1 1 200px" }}>
//     <h4>Follow Us</h4>
//     <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
//       <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Facebook</a></li>
//       <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Twitter</a></li>
//       <li><a href="#" style={{ color: "black", textDecoration: "none" }}>LinkedIn</a></li>
//       <li><a href="#" style={{ color: "black", textDecoration: "none" }}>Instagram</a></li>
//     </ul>
//   </div>

//   {/* Contact Info */}
//   <div style={{ flex: "1 1 250px" }}>
//     <h4>Contact Info</h4>
//     <p style={{ margin: "8px 0" }}>📞 256-627-624</p>
//     <p style={{ margin: "8px 0" }}>✉️ viewbear@gmail.com</p>
//     <p style={{ margin: "8px 0" }}>📍 711 Signal Mountain Rd, #203 Chattanooga, TN 37405</p>
//   </div>

//   {/* Helpful Links */}
//   <div style={{ flex: "1 1 200px" }}>
//     <h4>Helpful Links</h4>
//     <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
//        <li><a href="#about" style={{ color: "black", textDecoration: "none" }}>Abouts</a></li>
//       <li><a href="#products" style={{ color: "black", textDecoration: "none" }}>Products</a></li>
//       <li><a href="#markets" style={{ color: "black", textDecoration: "none" }}>Markets</a></li>
//       <li><a href="#contactus" style={{ color: "black", textDecoration: "none" }}>Contact Us</a></li>
//     </ul>
//   </div>
// </footer>

//     </div>
//   );
// };

// export default FrontPage;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // react-router hook
import Vimage from "../assets/Vimage.png";

const FrontPageHero = () => {
  const [visible, setVisible] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [textHover, setTextHover] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Check if current path is home ("/")
    if (location.pathname === "/") {
      setVisible(false); // Reset visibility
      const timeout = setTimeout(() => {
        setVisible(true); // Animate fade-in & slide-up
      }, 50); // delay to allow reflow

      return () => clearTimeout(timeout);
    } else {
      setVisible(false);
    }
  }, [location.pathname]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "90vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Vimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "0 40px",
        position: "relative",
        fontFamily: "Roboto, sans-serif",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1.5s ease, transform 1.5s ease",
      }}
    >
      <div style={{ maxWidth: 800, marginLeft: "8%" }}>
        <h5
          style={{
            fontSize: "1.5rem",
            marginBottom: "60px",
            lineHeight: 1.4,
            userSelect: "none",
          }}
        >
          <span
            onMouseEnter={() => setTextHover(true)}
            onMouseLeave={() => setTextHover(false)}
            style={{
              color: "#FFA500",
              fontWeight: "bold",
              fontSize: "2rem",
              display: "inline-block",
              cursor: "pointer",
              transition: "transform 0.3s ease, textShadow 0.3s ease",
              transform: textHover ? "scale(1.05)" : "scale(1)",
              textShadow: textHover
                ? "0 0 8px rgba(255, 165, 0, 0.8)"
                : "none",
            }}
          >
            Connect with Your Audience Everywhere!
          </span>
          <br />
          Expand your reach and captivate customers in untapped locations through expertly crafted Out-of-Home Advertising.
        </h5>
        <a
          href="#contactus"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            backgroundColor: "#FFA500",
            color: "white",
            padding: "14px 36px",
            borderRadius: "30px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1rem",
            boxShadow: btnHover
              ? "0 6px 12px rgba(0, 53, 102, 0.8)"
              : "0 4px 8px rgba(0, 53, 102, 0.6)",
            display: "inline-block",
            transition: "transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease",
            transform: btnHover ? "scale(1.05)" : "scale(1)",
            filter: btnHover ? "brightness(1.1)" : "brightness(1)",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
};

export default FrontPageHero;



