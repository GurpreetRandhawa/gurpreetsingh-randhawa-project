import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import HomePage from "./Page/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Main />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<Upload />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
