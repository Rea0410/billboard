// App.jsx or AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/home';
import About from './Components/about';
import ContactUS from './Components/contact-us'
import Markets from './Components/markets'
import Meet from './Components/meet-team'
import Products from './Components/our-product'
import GiveUs from './Components/give-us'
import Gallery from './Components/gallery'
import BillboardDetail from './Components/billboard-details';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/team" element={<Meet />} />
          <Route path="/products" element={<Products />} />
          <Route path="/giveus" element={<GiveUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/location-detail" element={<BillboardDetail />} />
          {/* add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
