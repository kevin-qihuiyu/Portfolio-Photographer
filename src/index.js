import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import './index.css';

import Layout from "./Pages/Layout";
import NoPage from "./Pages/NoPage";
import BlackAndWhitePhotos from "./Pages/BlackAndWhitePhotos";
import ColorPhotos from "./Pages/ColorPhotos";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<BlackAndWhitePhotos />} />
            <Route path="colors" element={<ColorPhotos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);