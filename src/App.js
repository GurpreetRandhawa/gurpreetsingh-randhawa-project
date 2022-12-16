import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import AboutPage from "./Page/AboutPage/AboutPage";
import PackagePage from "./Page/PackagesPAge/PackagePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/packages" element={<PackagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
