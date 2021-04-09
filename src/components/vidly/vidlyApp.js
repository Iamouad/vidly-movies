import React, { Component } from 'react';
import {getGenres} from '../../services/genreService';
import {getMovies, deleteMovie} from '../../services/movieService';
import {toast } from "react-toastify";
import Movies from './movies/movies';
import ListGroup from './../common/listGoup';



class VidlyApp extends Component {
    state = { 
        movies: [],
        genres: [],
        itemsPerPage: 3,
        currentPage: 1,
        selectedGenre: "0",
        searchQuery: "",
        sortColumn: {path: "title", ord: "asc"}
     };

     async componentDidMount() {
         const {data : genres} = await getGenres();
         const {data : movies} = await getMovies()
         
         this.setState(
             {
                movies,
                genres,
              } )
     }

     handleDelete = async movie =>{
         const originalMovies = this.state.movies;
         const movies = originalMovies.filter(m => m._id !== movie._id);
            this.setState({ 
            movies
        })
        try {
            toast("Deleting movie: "+ movie.title)  
            await deleteMovie(movie._id)   
          } catch (ex) {
            //we get the old state in case of an expected error error
            if(ex.response && ex.response.status === 404){
                toast.error("This movie has already been deleted.")
            }
            
            this.setState({movies: originalMovies})
          }
        
     };

     handleLike = movie =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie}
        movies[index].liked = !movies[index].liked;
           this.setState({ 
           movies
       })
       
    };


    handlePageChange = pageNumber =>{
        this.setState({currentPage: pageNumber})
    }

    handleGenreChange = genre => {
        this.setState({selectedGenre: genre.id, currentPage: 1, searchQuery: ""})
    }

    handleSort = path =>{
        const sortColumn = {...this.state.sortColumn}
        if(path === sortColumn.path)
            sortColumn.order = (sortColumn.order === "asc") ? "desc": "asc";
        else{
            sortColumn.order = "asc";
            sortColumn.path= path;
        }
        this.setState({sortColumn})
    }

    handleSearch = (e) =>{
        const searchQuery = e.currentTarget.value.trim();
        if(searchQuery)
            this.setState({searchQuery, currentPage:1, selectedGenre:"0"})
        else 
            this.setState({searchQuery: "", currentPage:1, selectedGenre:"0"})
            
     }
    render() { 
        const {movies, itemsPerPage, currentPage, genres, selectedGenre, sortColumn, searchQuery} = this.state;
        const items = [{"id": "0", "label": "All genres"}, ...genres.map(g => {return {"id": g._id, "label": g.name}})]
        return ( 
            <div className="row">
                <div className="col-3 mt-2">
                <ListGroup items={items}
                 onItemChange={this.handleGenreChange}
                 selectedItem={items.filter(item => item.id === selectedGenre)}
                 />
                </div>
                <div className="col">
                <button className="btn btn-primary mt-2"
                onClick={() => this.props.history.push("/movie/new")}
                >New Movie</button>
                <Movies movies={movies}
                 itemsPerPage={itemsPerPage}
                 currentPage={currentPage}
                 selectedGenre={selectedGenre}
                 searchQuery={searchQuery}
                 onLike={this.handleLike}
                 onDelete={this.handleDelete}
                 onPageChange={this.handlePageChange}
                 onSort={this.handleSort}
                 sortColumn={sortColumn}
                 onSearch={this.handleSearch}
                 />          
                </div>
            </div>
        );
    }
}
 
export default VidlyApp;