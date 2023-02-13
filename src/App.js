import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import SingleWorkPage from "./pages/SingleWorkPage/SingleWorkPage";
import SingleBlogPage from "./pages/SingleBlogPage/SingleBlogPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work/:id" element={<SingleWorkPage />} />
          <Route path="/blog/:query" element={<SingleBlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
