import React from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

import BgNakashima from './images/nakashima-screen.png';
import BgSprey from './images/spreybox.png';
import BgFoundation from './images/tse-foundation.png';
import BgArchitect from './images/architect.png';
import BgBottleService from './images/bottle-service.png';
import BgDrinkHaus from './images/drink-haus.png';
import bgInfiniteFood from './images/infinite-food.png';
import bgMensch from './images/mensch.png';
import bgMeNotebooks from './images/notebooks.png';
import bgPalms from './images/rooms.png';
import bgEnde from './images/ende.png';

class Projects extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-container">
        <h1 className="base-title">Projects</h1>
          <div className="projects-container">
          <article className="project" style={{ backgroundImage: `url(${bgEnde})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://www-somosende-com.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Somos ENDE<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${BgDrinkHaus})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://drink-haus.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Drink Haus<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${bgMensch})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://mensch.vercel.app/" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Mensch<span>_</span></h3>
                </div>
              </Link>
            </article>
            <article className="project" style={{ backgroundImage: `url(${BgSprey})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://spraybox.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Spraybox Magazine<span>_</span></h3>
                </div>
              </Link>
            </article>
            <article className="project" style={{ backgroundImage: `url(${BgNakashima})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://nakashima-woods.vercel.app/" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Nakashima Woodworkers<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${BgFoundation})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://tse-foundation-org.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">TSE Foundation<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${BgArchitect})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://www-williamslester-com.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Architects<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${BgBottleService})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://www-youngspirits-co-uk.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Young Spirits<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${bgInfiniteFood})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://infinityfoodsretail-coop.vercel.app/" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Infinite Food<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${bgMeNotebooks})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://modnotebooks-com.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Mode Notebooks<span>_</span></h3>
                </div>
              </Link>
            </article>

            <article className="project" style={{ backgroundImage: `url(${bgPalms})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://twobunchpalms-com.vercel.app" })} target="_blank">
                <div className="project-container">
                  <h3 className="project-name">Two Bunch Palms<span>_</span></h3>
                </div>
              </Link>
            </article>

          </div>
      </div>
    )
  }
}

export default Projects;