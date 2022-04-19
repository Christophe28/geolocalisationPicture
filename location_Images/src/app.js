import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const app = () => {
  return (
    <Routes>
        <Route exact to path="/" element={<Home />} />
    </Routes>
  );
};

export default app;