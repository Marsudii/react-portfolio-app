import React from 'react';
import { Link } from 'react-router-dom';

import './Socials.scss';

function Socials() {
	return (
		<div className="contact-menu d-flex-c">
			<Link to={location => ({ ...location, pathname: "https://github.com/buhowski" })} target="_blank">
				<span className="title">GitHub</span>
				<span className="icon-github"></span>
			</Link>
			<a href="tel:+380993129768">
				<span className="title">Call</span>
				<span className="icon-phone"></span>
			</a>
			<Link to={location => ({ ...location, pathname: "https://t.me/buhowski" })} target="_blank">
				<span className="title">Telegram</span>
				<span className="icon-telegram"></span>
			</Link>
			<Link to={location => ({ ...location, pathname: "https://drive.google.com/file/d/1Q15mgFV3ZLaNCjAWv8tbeXNkQKr3UyIb/view?usp=sharing" })} target="_blank">
				<span className="title">CV</span>
				<span className="icon-cv"></span>
			</Link>
		</div>
	)
}

export default Socials;