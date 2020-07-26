import React from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

import Bg from './images/pt.png';

class Projects extends React.Component {

  render() {
    return (
      <div className="wrapper wrapper-container">
        <h1 className="base-title">Projects</h1>
        <div className="project-overflow">
          <div className="projects-container">
            <article className="project" style={{ backgroundImage: `url(${Bg})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://github.com/buhowski" })}target="_blank">
                <div className="project-container">
                  <h3 className="project-name">website<span>_</span></h3>
                </div>
              </Link>
            </article>
            <article className="project" style={{ backgroundImage: `url(${Bg})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://github.com/buhowski" })}target="_blank">
                <div className="project-container">
                  <h3 className="project-name">website<span>_</span></h3>
                </div>
              </Link>
            </article>
            <article className="project" style={{ backgroundImage: `url(${Bg})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://github.com/buhowski" })}target="_blank">
                <div className="project-container">
                  <h3 className="project-name">website<span>_</span></h3>
                </div>
              </Link>
            </article>
            <article className="project" style={{ backgroundImage: `url(${Bg})` }}>
              <Link className="project-link" to={location => ({ ...location, pathname: "https://github.com/buhowski" })}target="_blank">
                <div className="project-container">
                  <h3 className="project-name">website<span>_</span></h3>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;