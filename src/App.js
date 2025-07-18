import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import AdminLogin from "./Pages/AdminLogin";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Contact from "./Pages/ContactUs";
import Recommendation from "./Components/Recommendation";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin login route without footer */}
        <Route
          path="/admin"
          element={
            <div>
              <Navbar />
              <AdminLogin />
            </div>
          }
        />

        {/* All other routes with Layout (includes footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recommendation" element={<Recommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
