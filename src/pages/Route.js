import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Route extends Component {
	render(){
    return(
        <div>
					<div className="dropdown">
						<button className="dropbtn">Choose Op</button>
						<div className="dropdown-content">
						<Link to="/">Small</Link>
						<Link to="/medium">Medium</Link>
						<Link to="/large">Large</Link>
						</div>
					</div>
				</div>
    )
	}
}

export default Route;