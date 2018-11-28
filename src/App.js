import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-light">
					<Link className="navbar-brand logo" to="/portfolio">
						<img src="img/N.svg" alt="logo"/>
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tabs" aria-controls="tabs" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div id="tabs" className="collapse navbar-collapse">
						<ul className="navbar-nav nav-fill w-100 align-items-center">
							<li className="nav-item">
								<Link className="nav-link" to="/work">Work</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">Resume</Link>
							</li>
							<li className="nav-item logo">
								<Link className="nav-link" to="/portfolio">
									<img src="img/N.svg" alt="logo"/>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contact</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/stuff">Stuff</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Main />
				<div className="footer container-fluid text-right">
					<p>© 2018 nrcalero</p>
					<p>Built with Bootstrap</p>
				</div>
			</div>
		);
	}    
	componentDidMount () {
		const tabs = document.getElementById('tabs');
		const links = tabs.querySelectorAll('.nav-item');
		const brand = document.getElementsByClassName('navbar-brand');
		const toggler = document.querySelector('.navbar-toggler');

		links.forEach(link => {
			link.addEventListener('click', () => {
				const expanded = toggler.getAttribute('aria-expanded');
				if(expanded === 'true')
					toggler.click();
			})
		});

		brand[0].addEventListener('click', () => {
			const expanded = toggler.getAttribute('aria-expanded');
			if(expanded === 'true')
				toggler.click();
		});
    }
}

export default App;
