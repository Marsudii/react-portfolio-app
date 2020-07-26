import React from 'react';

import './About.scss';

import PhotoBg from './images/body.png';
import Brain from './images/brain.png';
import Roots from './images/roots.png';
import Keyboard from './images/keyboard.png';
import Writer from './images/writer.png';
import Backpack from './images/backpack.png';

class About extends React.Component {
  
  state = {
    active: null
  }
  addActiveClass = (e) => {
    const clicked = e.target.id
    if (this.state.active === clicked) {
      this.setState({
        active: ''
      });
    } else {
      this.setState({
        active: clicked
      })
    }
  }
  render() {
    return (
      <div className="wrapper about-wrapper">
        <h1 className="base-title">Me Starter Pack</h1>
        <div className="about-info">
          <div className="img">
            <img src={PhotoBg} alt="looking into the future"/>
          </div>
          <div className="about-item brain">
            <div 
              className={`ball${this.state.active === "brain"? ' active': ''}`} 
              id="brain" 
              onMouseOver={this.addActiveClass}
            ></div>
            <div className="show">
              <p className="title">
                IDEA THINKER
              </p>
              <img className="line-drawing-pic" src={Brain} alt="IDEA THINKER" />
            </div>
          </div>
          <div className="about-item writer">
            <div
              className={`ball${this.state.active === "writer"? ' active': ''}`} 
              id="writer" 
              onMouseOver={this.addActiveClass}
            ></div>
            <div className="show">
              <p className="title">
                I like writing short screenplays and come up with new ideas
              </p>
              <img className="line-drawing-pic" src={Writer} alt="I like writing short screenplays and come up with new ideas" />
            </div>
          </div>
          <div className="about-item keyboard">
            <div 
              className={`ball${this.state.active === "keyboard"? ' active': ''}`} 
              id="keyboard" 
              onMouseOver={this.addActiveClass}
            ></div>
            <div className="show">
              <p className="title">
                Skills: HTML, CSS/SASS, JavaScript (Jquery/React), Gulp/Webpack, Git
              </p>
              <img className="line-drawing-pic" src={Keyboard} alt="Skills: HTML, CSS/SASS, JavaScript (Jquery/React), Gulp/Webpack, Git" />
            </div>
          </div>
          <div className="about-item backpack">
            <div
              className={`ball${this.state.active === "backpack"? ' active': ''}`} 
              id="backpack" 
              onMouseOver={this.addActiveClass}
            ></div>
            <div className="show">
              <p className="title">
                Like to travel everywhere and go hiking
              </p>
              <img className="line-drawing-pic" src={Backpack} alt="Like to travel everywhere and go hiking" />
            </div>
          </div>
          <div className="about-item roots">
            <div
              className={`ball${this.state.active === "roots"? ' active': ''}`} 
              id="roots" 
              onMouseOver={this.addActiveClass}
            ></div>
            <div className="show">
              <p className="title">
                BORN TO IMPROVE
              </p>
              <img className="line-drawing-pic" src={Roots} alt="BORN TO IMPROVE" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;