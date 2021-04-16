import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import VidlyApp from "./components/vidly/vidlyApp";
import Rentals from './components/vidly/rentals/rentals';
import Customers from './components/vidly/customers/customers';
import NavBar from './components/vidly/movies/navbar';
import NotFound from './components/common/not-found';
import MovieForm from './components/vidly/movies/movieForm';
import LoginForm from './components/auth/loginForm';
import RegisterForm from "./components/auth/registerForm";
import Logout from "./components/common/logout";
import ProtectedRoute from './components/common/protectedRoute';
import auth from "./services/authService";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";



class App extends Component {
  state = {
    
  }; 

  componentDidMount() {
    try { 
      const user = auth.getCurrentUser()
      this.setState({user})     
    } catch (error) {
      return
    }
  }

  render() {
    const user = this.state.user;
  return (
    <div>
      <ToastContainer />
      <NavBar user={user}/>
      <div className="content-container">
        <Switch>
        <ProtectedRoute path="/movie/:id?"
         component={MovieForm}
          />
          <Route path="/movies" render={
            props =>  <VidlyApp {...props} user={user} />
          } />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect path="/" exact to="/movies" />
          <Redirect to="/not-found"/>

        </Switch>
      </div>

    </div>
   
  );
  }

}

export default App;
