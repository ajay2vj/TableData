import React, { Component } from 'react';
import Pagination from './pagination';
import Route from './Route';
import small from './small.json';
class Home extends Component {
	render(){
    return(
        <div>
          <div className="parent-div">
						<Route/>
						<div className="search-tab">
							<input type="text" placeholder="Search.." id="searchbar"/>
						</div>
					</div>
					<table id="employee_table_medium">
						<thead>
							<tr>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Location</th>
								<th>Date</th>
								<th>Salary</th>
							</tr>
						</thead>
						
                {small.map(el => {
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
					<Pagination/>
        </div>
    )
		}
}

export default Home;