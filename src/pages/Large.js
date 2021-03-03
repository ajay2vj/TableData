import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import contacts from './large.json';
class Large extends Component {
	render(){
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
					<table id="employee_table_larg">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Location</th>
								<th>Date</th>
								<th>Salary</th>
							</tr>
						</thead>
						
                {contacts.map(el => {
                  return (
										<tbody>
											<td key={el.id} style={{display:"none"}}></td>
											<td>{el.firstName}</td>
											<td>{el.lastName}</td>
											<td>{el.location}</td>
											<td>{el.date}</td>
											<td>{el.salary}</td>
										</tbody>
                  );
                })}
						
					</table>
        </div>
    )
		}
}

export default Large;