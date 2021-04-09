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
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";
import auth from "./services/authService";



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
  return (
    <div>
      <ToastContainer />
      <NavBar user={this.state.user}/>
      <div className="content-container">
        <Switch>
        <Route path="/movie/:id?" component={MovieForm} />
          <Route path="/movies" component={VidlyApp} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
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
