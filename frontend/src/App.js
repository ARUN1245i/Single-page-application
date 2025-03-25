import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Track from "./pages/Track";
import UploadDocuments from "./pages/UploadDocuments";
import TrackStatusPage from "./components/TrackStatusPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/track" element={<Track />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/UploadDocuments" element={<UploadDocuments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
