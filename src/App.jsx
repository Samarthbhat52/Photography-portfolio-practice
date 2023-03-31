import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Travel, Street } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="travel" element={<Travel />} />
        <Route path="street" element={<Street />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
