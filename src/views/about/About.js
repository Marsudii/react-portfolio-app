import React from 'react';
import dotsData from './aboutData';
import PhotoBg from './images/body.png';
import './About.scss';

class About extends React.Component {
	state = {
		active: null
	}

	addActiveClass = (e) => {
		const hoveredItemId = e.target.id
		if (this.state.active === hoveredItemId) {
			this.setState({
				active: null
			});
		} else {
			this.setState({
				active: hoveredItemId
			});
		}
	}

	render() {
		const aboutElements = dotsData.map((item) => {
			return (
				<div className={`about-item ${item.classItem}`} key={item.id}>
					<div 
						id={item.classItem} 
						onMouseOver={this.addActiveClass}
						className={`ball${this.state.active === item.classItem ? ' active' : ''}`}
					></div>
					<div className="show">
						<p className="title">
							{item.title}
						</p>
						<img className="line-drawing-pic" src={item.img} alt={item.title} />
					</div>
				</div>
			)
		});

		return (
			<div className="wrapper about-wrapper">
				<h1 className="base-title">Me Starter Pack</h1>
				<div className="about-info">
					<div className="img">
						<img src={PhotoBg} alt="looking into the future"/>
					</div>
					{aboutElements}
				</div>
			</div>
		)
	}
}

export default About;