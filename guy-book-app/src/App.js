import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/style/Navbar';
// import Footer from './components/style/Footer'; // ลบหรือคอมเมนต์บรรทัดนี้
import HomePage from './pages/style/HomePage';
import NotFound from './components/style/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */} {/* ลบหรือคอมเมนต์บรรทัดนี้ */}
    </div>
  );
}

export default App;