import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from '../components/header/Header';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Gallery from './gallery/Gallery';

import './App.scss';

const MainPage = () => {
	return (
		<Route render={({location}) => (
			<TransitionGroup>
				<CSSTransition 
					key={location.key}
					classNames="slide"
					timeout={1700}
				>
					<div id="page" className="page">
						<div className="page-container">
							<Header />
							<Switch location={location}>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/projects" component={Projects} />
								<Route exact path="/gallery" component={Gallery} />
							</Switch>
						</div>
					</div>
				</CSSTransition>
			</TransitionGroup>
		)} />
	);
}

export default MainPage;