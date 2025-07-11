import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import Recommendation from "./Components/Recommendation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recommendation" element={<Recommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
