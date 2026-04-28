import React from "react";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <section id="about" className=" bg-red text-whitesmoke">
        <div className="top-buffer"/>
        <div className="content-box">
            <div className="side"/>
            <div className="content"><h2>Art and Code 3D Outsourcing, from Brazil to the world!</h2></div>
            <div className="side"/>
        </div>
    </section>
    <section id="play" className=" text-red">
        <div className="top-buffer"/>
        <div className="content-box">
            <div className="side"/>
            <div className="content"><h2 className="title">Play</h2></div>
            <div className="side"/>
        </div>
    </section>
    <section id="services" className=" bg-red text-whitesmoke">
        <div className="top-buffer"/>
        <div className="content-box">
            <div className="side"/>
            <div className="content"><h2 className="title">Services</h2></div>
            <div className="side"/>
        </div>
    </section>
    <section id="contact" className="text-red">
        <div className="top-buffer"/>
        <div className="content-box">
            <div className="side"/>
            <div className="content"><h2 className="title">Contact</h2></div>
            <div className="side"/>
        </div>
    </section>
    </>
  );
}
export default App;