import React, { Component } from 'react';
import contacts from './large.json';
import Pagination from './pagination';
import Route from './Route';
import SearchBox from './SearchBox';
class Large extends Component {
	render(){
    return(
        <div>
          <div className="parent-div">
						<Route/>
						<SearchBox />
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
						
                {contacts.map(el => {
                  return (
										<tbody id="myTable">
											<tr>
												<td key={el.id} style={{display:"none"}}></td>
												<td>{el.firstName}</td>
												<td>{el.lastName}</td>
												<td>{el.location}</td>
												<td>{el.date}</td>
												<td>{el.salary}</td>
											</tr>
										</tbody>
                  );
                })}
						
					</table>
					<Pagination/>
        </div>
    )
		}
}

export default Large;