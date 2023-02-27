import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails.js";
import Contacts from "./components/Contacts/Contacts";
import Error from "./components/Error/Error";
import SignUp from "./components/SignUp/SignUp";

import './App.css'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:objectId" element={<ServiceDetails />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
