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
import HealthForm from "./Pages/HealthForm";
import SensorsConfig from "./Pages/SensorsConfig";
import AdminLayout from "./Pages/AdminLayout";
import FeedbackPage from "./Pages/FeedbackPage";
import SensorContextProvider from "./Pages/SensorContext";

function App() {
  return (
    <BrowserRouter>
      <IaqProvider>
        {" "}
        {/* provides air quality context in entire app */}
        <SensorContextProvider>
          {" "}
          {/* provides sensor context in entire app */}
          <Routes>
            {/* Admin login route without footer */}
            <Route
              path="/admin-login"
              element={
                <div>
                  <Navbar />
                  <AdminLogin />
                </div>
              }
            />

            {/* Main layout */}

            {/* All other routes with Layout (includes footer) */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home hello="hello" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="sensor" element={<Sensor />} />
              <Route path="recommendation" element={<Recommendation />} />
              <Route path="health" element={<HealthForm />} />

              {/* Admin routes protected by PrivateRoute */}
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <AdminLayout />
                  </PrivateRoute>
                }
              >
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="sensorsConfig" element={<SensorsConfig />} />
                <Route path="feedback" element={<FeedbackPage />} />
              </Route>
            </Route>
          </Routes>
          {/* Admin layout without footer */}
        </SensorContextProvider>
      </IaqProvider>
    </BrowserRouter>
  );
}

export default App;
