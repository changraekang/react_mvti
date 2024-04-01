import React from "react";
import { Routes, Route } from "react-router-dom";
// page routes Component
import Home from "./pages/Home";

// 라우트 테스트용
import Test from "./pages/Test";
// mvti 페이지
import MvtiTest from "./pages/MvtiTest";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mvtiTest" element={<MvtiTest />} />
      <Route path="/test" element={<Test />} />

      {/* 에러페이지 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
