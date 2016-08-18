import React from 'react';
import logo from '../../images/logo.svg';

class Navigation extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse">
   			<div className="navbar-header">
      		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNav"
						aria-expanded="false">
        		<span className="sr-only">Toggle Navbar</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
        	</button>
					<a href="#" className="navbar-brand"><img src={logo} className="App-logo" alt="logo" /></a>
      	</div>

				<div className="collapse navbar-collapse" id="myNav">
    			<ul className="nav navbar-nav">
       			<li><a href="#">Link 1</a></li>
       			<li className="active"><a href="#">Link 2</a></li>
       			<li><a href="#">Link 3</a></li>
       		</ul>
    		</div>
   		</nav>
		);
	}
}

export default Navigation;
