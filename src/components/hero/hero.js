import React from "react";
import './hero.css';
import laptop from '../../assets/laptop.jpg';

const Hero = () => {
    return(
        <section id="home" class="main-page"> 
        <div className="intro">
            <div className="headings">
            <h1 className="first-heading">Hello, I'm</h1>
            <h1 className="first-heading">Jeffrey Ongicho</h1>
            <p className="paragraph">
            I am passionate about web development and seek to improve my front end
            development skills.
            </p>
        </div>
        <div className="intro-buttons">
        <button className="btn common-btn">Hire Me</button>
        </div>
        </div>
        </section>
    );
}
export default Hero;