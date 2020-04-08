import React from "react";
import "./Home.css";
import Logo from '../../logo.svg'

const Home = () => (
  <div className="Home">
    <h1>Repo for testing API stuff.</h1>
    <h2>I just started coding React</h2>
    <h2>And this is a dummy project as a start</h2>
    <h2>Basically all it does is just getting simple information from a REST API</h2>
    <h2>and filter them with a simple function</h2>
    <img className="spinLogo" src={Logo} alt=""/>
  </div>
);
export default Home;
