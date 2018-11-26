import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-md navbar-light bg-light">
					<a class="navbar-brand logo" href="">
						<img src="img/N.svg" alt="logo"/>
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#tabs" aria-controls="tabs" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div id="tabs" class="collapse navbar-collapse">
						<ul class="navbar-nav nav-fill w-100 align-items-center">
							<li class="nav-item">
								<Link class="nav-link" to="/work">Work</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/about">About</Link>
							</li>
							<li class="nav-item logo">
								<a class="nav-brand" href="">
									<img src="img/N.svg" alt="logo"/>
								</a>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/contact">Contact</Link>
							</li>
							<li class="nav-item">
								<Link class="nav-link" to="/stuff">Stuff</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Main />
				<div class="footer container-fluid text-right">
					<p>© 2018 nrcalero</p>
					<p>Built with Bootstrap</p>
				</div>
			</div>
		);
	}
}

export default App;
