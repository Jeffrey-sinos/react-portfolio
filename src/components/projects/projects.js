import React from "react";
import './projects.css'
import food from '../../assets/food app cart.png'
import estate from '../../assets/real estate app.png'
const Project = () => {
    return(
        <section className="portfolio" id="projects">
        <div className="portfolio-heading">
        <h1 className="my-heading-text-center">Projects</h1>
        </div>
        <div className="portfolio-content">
        <div className="my-row">
        <div className="my-col">
        <div className="my-card port-card">
          <div className="image">
          <img src={estate}></img>
          </div>
          <h3 className="greet-heading blue-text">Real estate application</h3>
          <p>
            A real estate application for purchase and renting of properties
          </p>
        </div>
        </div>
        <div className="my-row">
            <div className="my-col">
            <div className="my-card port-card">
            <div className="image">
              <img src={food}></img>
            </div>
            <h3 className="greet-heading blue-text">
              Food ordering application
            </h3>
            <p>A food ordering application from a restaurant</p>
          </div>
        </div>
        </div>
         </div>
        </div>
        </section>

    );
}
export default Project;