import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Sidebar from "./Components/Sidebar";
import NavaBar from "./Components/Navbar";
import Teachers from "./Pages/Teacher";
import Student from "./Pages/Student";
import Analytics from "./Pages/Analytics";
import Productlist from "./Pages/products/productlist";
import Api from "./Api";
import Login from "./Login";
import { AuthProvider, useAuth } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function AppWrapper() {
  const { user } = useAuth();

  if (!user) {
    // Login nahi hai → sirf login page
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  // Login hai → Navbar + Sidebar + routes
  return (
    <>
      <NavaBar />
      <Sidebar>
        <Api />
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
          <Route path="/students" element={<ProtectedRoute><Student /></ProtectedRoute>} />
          <Route path="/teachers" element={<ProtectedRoute><Teachers /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Productlist /></ProtectedRoute>} />
        </Routes>
      </Sidebar>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppWrapper />
    </AuthProvider>
  );
}

export default App;
