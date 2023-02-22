import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import './App.css'
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>


      </main>
      <Footer />
    </div>
  );
}

export default App;
