import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.scss';

import Header from '../components/header/Header';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Gallery from './gallery/Gallery';

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
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/gallery" component={Gallery} />
              </Switch>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default MainPage;