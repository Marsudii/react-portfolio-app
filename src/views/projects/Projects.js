import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	return (
		<div className="wrapper wrapper-container">
			<h1 className="base-title">Projects</h1>
				<div className="projects-container">
					{projectsData.map(({img, url, name}, i) => {
						return (
							<article className="project" style={{backgroundImage: img}} key={i}>
								<Link className="project-link" to={{pathname: url}} target="_blank">
									<div className="project-container">
										<h3 className="project-name">{name}<span>_</span></h3>
									</div>
								</Link>
							</article>
						)
					})}
				</div>
		</div>
	)
}

export default Projects;