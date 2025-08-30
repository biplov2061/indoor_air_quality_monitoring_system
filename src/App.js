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
import Sensor from "./Pages/Sensor";
import AdminDashboard from "./Pages/AdminDashboard";
import { IaqProvider } from "./Pages/IaqContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <IaqProvider>
<<<<<<< HEAD
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
          <Route index element={<Home hello="hello"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sensor" element={<Sensor />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="admin/dashboard" 
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
             } 
          />
          
        </Route>
      </Routes>
     </IaqProvider>
=======
        <Routes>
          <Route
            path="/admin"
            element={
              <div>
                <Navbar />
                <AdminLogin />
              </div>
            }
          />

          <Route path="/" element={<Layout />}>
            <Route index element={<Home hello="hello" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sensor" element={<Sensor />} />
            <Route path="recommendation" element={<Recommendation />} />
          </Route>

          <Route path="/admin_dashboard" element={<AdminDashboard />} />
        </Routes>
      </IaqProvider>
>>>>>>> 5ee278cdc0ec0f0421d8d41b9b495cfbd3b7add1
    </BrowserRouter>
  );
}

export default App;
