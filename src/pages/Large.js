import React from 'react';
import { Link } from 'react-router-dom';
function Large() {
    return(
        <div>
          <div className="parent-div">
						<div className="dropdown">
							<button className="dropbtn">Choose Op</button>
							<div className="dropdown-content">
							<Link to="/">Small</Link>
							<Link to="/medium">Medium</Link>
							<Link to="/large">Large</Link>
							</div>
						</div>
						<div className="search-tab">
							<input type="text" placeholder="Search.." id="searchbar"/>
						</div>
					</div>
					<table id="employee_table_large">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Location</th>
								<th>Date</th>
								<th>Salary</th>
							</tr>
						</thead>
						<tbody>
					
						</tbody>
					</table>
        </div>
    )
}

export default Large;