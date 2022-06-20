import React from "react";
import NavBar from "./Nav";
import Dashboard from "./Dashboard";
import Customer from "./Customer";
import Carts from "./Carts";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Customer />} />
        <Route path="carts" element={<Carts />} />
      </Routes>
    </div>
  );
}
export default App;
