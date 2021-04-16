import React, { Component } from 'react';
import _ from 'lodash'
import { paginate } from './../../../utils/paginate';
import Like from './../../common/like';
import Pagination from './../../common/pagination';
import { Link } from 'react-router-dom';
import SearchBox from '../../common/searchBox';


class Movies extends Component {
    
     render() { 
        return ( 
            this.renderMoviesTable()
        );
    }

    filterMovies(){
        const {movies: allMovies,selectedGenre, searchQuery} = this.props;
        if(selectedGenre === "0"){
            if(searchQuery){
                return allMovies.filter(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())) 
            }
            return allMovies
        }
        return allMovies.filter(m => m.genre._id === selectedGenre)  
    }

     renderMoviesTable = () =>{

        const {movies: allMovies, itemsPerPage, currentPage,onSort, sortColumn, user} = this.props;
  
        const filteredMovies = this.filterMovies()
        
        const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])
        
         const movies = paginate(sortedMovies, currentPage, itemsPerPage);

         if(allMovies.length === 0)
            return <h3 className="my-4">There are no movies in the database</h3>

        return (
            <div>
            <h3 className="my-4">Showing {filteredMovies.length} movies in the database.</h3>
            <SearchBox onSearch={this.props.onSearch}/> 
            <table className="table">
            {filteredMovies.length === 0 ? <thead></thead>: 
                <thead>
                <tr>
                <th onClick={() => onSort('title')} scope="col" style={{"cursor": "pointer"}}>Title</th>
                <th onClick={() => onSort('genre.name')} scope="col" style={{"cursor": "pointer"}}>Genre</th>
                <th onClick={() => onSort('numberInStock')} scope="col" style={{"cursor": "pointer"}}>Stock</th>
                <th onClick={() => onSort('dailyRentalRate')} scope="col" style={{"cursor": "pointer"}}>Rate</th>
                <th/>
                <th/>
                </tr>
                </thead>
            }
            <tbody>
            {movies.map(movie => 
            <tr key={movie._id}>
            <td>
                <Link to={"/movie/"+movie._id}>{movie.title}</Link>
            </td>
            <td>
                {movie.genre.name}
            </td>
            <td>
                {movie.numberInStock}
            </td>
            <td>
                {movie.dailyRentalRate}
            </td>
            <td>
                <Like liked={movie.liked} onLike={() => this.props.onLike(movie)}/>
            </td>
            <td>

                {user && user.isAdmin && <button onClick={() => this.props.onDelete(movie)} className="btn btn-sm btn-danger">Delete</button>}
            </td>
            </tr>
            )}
            </tbody>
            </table>
         
            <Pagination totalItems={filteredMovies.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={this.props.onPageChange}
            />
            </div>
        )
     }

   
}
 
export default Movies;