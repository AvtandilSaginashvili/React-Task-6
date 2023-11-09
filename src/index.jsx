import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css";
import Contact from "./Component/Contact";
import Aboutme from "./Component/Aboutme";
import navBar from "./Nav";

class App extends React.Component {
    render() {

        return (

            <BrowserRouter>

            <Routes>

            <Route index path="/" Component={navBar} />
            <Route path="contact" Component={Contact} />
            <Route path="aboutme" Component={Aboutme} />

            

            </Routes>
            </BrowserRouter>
        )
    }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);