import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Route from './Route';
import SearchBox from './SearchBox';
    
export class Home extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 11,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
            .get(`https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json`)
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice
                })
            });
    }

    render() {
        return (
            <div>
							<div className="parent-div">
							<Route/> 
							<SearchBox/>
							</div>
                  <table border="1">
                     <thead>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Location</th>
                         <th>Date</th>
                         <th>Salary</th>

                     </thead>
                     <tbody id="myTable">
                        {
                          this.state.tableData.map((tdata, i) => (
                                <tr>
                                    <td>{tdata.firstName}</td>
                                    <td>{tdata.lastName}</td>
                                    <td>{tdata.location}</td>
                                    <td>{tdata.date}</td>
                                    <td>{tdata.salary}</td>
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
        )
    }
}

export default Home
