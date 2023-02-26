import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as guestServices from "./services/guestServices.js"

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import Error from "./components/Error/Error";

import './App.css'
import ServiceDetails from "./components/ServiceDetails/ServiceDetails.js";

function App() {

    const [state, setState] = useState([]);
    useEffect(() => {
        const response = async () => {
            let result = await guestServices.getData('services');
            setState(Object.values(result));
        }
        response();
    }, []);

    return (
        <div className="app">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home services={state} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services services={state} />} />
                    <Route path="/services/:objectId" element= {<ServiceDetails />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
