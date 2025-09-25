import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/style/Navbar';
// import Footer from './components/style/Footer'; // ลบหรือคอมเมนต์บรรทัดนี้
import HomePage from './pages/style/HomePage';
import NotFound from './components/style/NotFound';
import Books from './pages/style/Books';
import Category from './pages/style/Category';
import About from './pages/style/about';
import Contect from './pages/style/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/books" element={<Books/>} />
          <Route path = "/category/fiction" element={<Category />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/contact" element={<Contect />} />
        </Routes>
      </main>
      {/* <Footer /> */} {/* ลบหรือคอมเมนต์บรรทัดนี้ */}
    </div>
  );
}

export default App;