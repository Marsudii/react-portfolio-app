import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Socials from '../socials/Socials';

import './Header.scss';

function Header() {

	const [ menuOpen, setMenuOpen ] = React.useState(false);

	return (
		<header className={`header d-flex-c${menuOpen ? ' header-overflow' : ''}`}>
			<div className="wrapper">
				<MediaQuery minWidth={769}>
					<div className="d-flex-c-b">
						<div className="logo">
							<NavLink className="logo-link" exact to="/">
								<span className="tag-color">&lt;</span><span>Buhowski</span><span className="tag-color">/&gt;</span>
							</NavLink>
						</div>
						<nav>
							<ul className="nav d-flex-c">
								<li className="nav-item">
									<NavLink className="nav-link" to="/about">About Me</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/projects">Projects</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/gallery">Gallery</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={768}>
					<div className="logo">
						<NavLink className="logo-link" exact to="/">
							<span className="tag-color">&lt;</span><span>Buhowski</span><span className="tag-color">/&gt;</span>
						</NavLink>
					</div>
					<div className='mobile-menu-btn' onClick={ () => {
						setMenuOpen(o => !o);
						} }>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<nav className={`mobile-menu${menuOpen ? ' open' : ''}`}>
						<div>
							<ul className="nav">
								<li className="nav-item">
									<NavLink className="nav-link" to="/about">About Me</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/projects">Projects</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/gallery">Gallery</NavLink>
								</li>
							</ul>
							<Socials />
						</div>
					</nav>
				</MediaQuery>
			</div>
		</header>
	);
}

export default Header;