// src/App.jsx
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
// import Services from './components/Services';
import GetQuote from './components/GetQuote';
// import Main from './components/Main';
import Product from './components/Product';
import BlogPage from './components/BlogPage';
import ProductCard from './components/ProductCard';
import BlogDetailsPage from './components/BlogDetailsPage';
import CompanyDetails from './components/CompanyDetails';
import Gallery from './components/Gallery';
import CompanyList from './components/CompanyList';
import ServiceDetailPage from "./components/ServiceDetailPage";

// Home Component
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CompanyList/>
      {/* <ProductCard/> */}
      
      <CompanyDetails/>
      <ServicesPage />
    
      <BlogPage />
      <ContactPage />
      <Footer />
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/blog/:id" component={<BlogDetailsPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/servicespage" element={<ServicesPage />} />
        <Route path="/" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} /> 
        <Route path="/getquote" element={<GetQuote />} />
        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/companydeatils" element={<CompanyDetails />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/compnaylist" element={<CompanyList />} />
      </Routes>
    </Router>
  );
};

export default App;
