import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from './projectsData';
import './Projects.scss';

const Projects = () => {
	const projectElements = projectsData.map((item) => {
		return (
			<article className="project" style={{backgroundImage: item.img}} key={item.keyId}>
				<Link className="project-link" to={{pathname: item.url}} target="_blank">
					<div className="project-container">
						<h3 className="project-name">{item.name}<span>_</span></h3>
					</div>
				</Link>
			</article>
		)
	});
	return (
		<div className="wrapper wrapper-container">
			<h1 className="base-title">Projects</h1>
				<div className="projects-container">
					{projectElements}
				</div>
		</div>
	)
}

export default Projects;