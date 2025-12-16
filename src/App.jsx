import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Setting from "./Pages/Setting";
import Sidebar from "./Components/Sidebar";
import NavaBar from "./Components/Navabar";
import Teachers from "./Pages/Teacher";
import Student from "./Pages/Student";
import Analytics from "./Pages/Analytics";
import Productlist from "./Pages/products/productlist";
function App() {
  return (
    <>
      <NavaBar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/products" element={<Productlist  />} />
        </Routes>
      </Sidebar>
    </>
  );
}

export default App;



