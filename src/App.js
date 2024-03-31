import React from "react";
import { Routes, Route } from "react-router-dom";
// page routes Component
import Home from "./pages/Home";

// 라우트 테스트용
import Test from "./pages/Test";
import Question from "./pages/Question";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
