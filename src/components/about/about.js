import React from "react";
import './about.css'
import personal from '../../assets/personal_photo.png'

const About = () => {
    return(
        <section id="about" className="about">
        <div className="about-text">
        <h1 className="my-heading">About Me</h1>
        <p className="lead-para">
        My name is Jeffrey Ongicho. I am interested in web development. I have
        some experience in HTML, CSS and JavaScript. I have also had experience
        with PHP and python.
        </p>
        </div>
        <div className="skill-bars">
        <div className="skill-bar">
        <p>HTML</p>
        <div className="bar">
        <span className="percentage">75%</span>
      </div>
    </div>
    <div className="skill-bar">
      <p>CSS</p>
      <div className="bar">
        <span className="percentage">60%</span>
      </div>
    </div>
    <div className="skill-bar">
      <p>JavaScript</p>
      <div className="bar">
        <span className="percentage">50%</span>
      </div>
    </div>
    <div className="skill-bar">
      <p>PHP</p>
      <div className="bar">
        <span className="percentage">55%</span>
      </div>
    </div>
    <div className="skill-bar">
      <p>Python</p>
      <div className="bar">
        <span className="percentage">50%</span>
      </div>
    </div>
    </div>
    <div className="about-image">
    <img src={personal}></img>
    </div>
    </section>

    );
}
export default About;