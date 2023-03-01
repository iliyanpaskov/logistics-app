import { Route, Routes } from "react-router-dom";
import { AuthenticationState } from "./context/AuthenticationContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails.js";
import Contacts from "./components/Contacts/Contacts";
import Error from "./components/Error/Error";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import MyProfile from "./components/MyProfile/MyProfile";
import MyOrders from "./components/MyOrders/MyOrders";

import './App.css'

function App() {
    return (
        <AuthenticationState>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:objectId" element={<ServiceDetails />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/my-profile" element={<MyProfile />} />
                        <Route path="/my-orders" element={<MyOrders />} />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthenticationState>
    );
}

export default App;
