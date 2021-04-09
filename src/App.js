import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import VidlyApp from "./components/vidly/vidlyApp";
import Rentals from './components/vidly/rentals/rentals';
import Customers from './components/vidly/customers/customers';
import NavBar from './components/vidly/movies/navbar';
import NotFound from './components/common/not-found';
import MovieForm from './components/vidly/movies/movieForm';
import LoginForm from './components/auth/loginForm';
import RegisterForm from "./components/auth/registerForm";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";



class App extends Component {
  state = {
    
  }; 

  render() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <div className="content-container">
        <Switch>
        <Route path="/movie/:id?" component={MovieForm} />
          <Route path="/movies" component={VidlyApp} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={VidlyApp} />
          <Redirect to="/not-found"/>

        </Switch>
      </div>

    </div>
    // <BrowserRouter>
    // <React.Fragment>
    // <NavBar />
    // <VidlyApp />
    // </React.Fragment>
    // </BrowserRouter>
  );
  }

}

export default App;
