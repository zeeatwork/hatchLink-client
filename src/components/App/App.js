import React, { Component } from "react";
import Header from "../Header/Header.js";
import config from "../../config.js";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import ResourceListPage from "../../routes/ResourceListPage/ResourceListPage";
import ResourcePage from "../../routes/ResourcePage/ResourcePage";
import LandingPage from "../LandingPage/LandingPage.js";
import LoginPage from "../../routes/LoginPage/LoginPage";
import ResourceContext from "../../contexts/ResourceContext";
import { Route, Switch } from "react-router-dom";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import "./App.css";

class App extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }
  // setResources = resources => {
  //   this.setState({
  //     resources,
  //     error: null,
  //   })
  // }

  // addResource = resourceId => {
  //   const newResources = this.state.resources.filter(rs =>
  //     rs.id !== resourceId
  //     )
  //     this.setState({
  //       resources: newResources
  //     })
  // }

  // componentDidMount() {
  //   fetch(config.API_ENDPOINT, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'Authorization': `Bearer: $config.API_KEY}`
  //     }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       return res.json().then(error => Promise.reject(error))
  //     }
  //     return res.json()
  //   })
  //   .then(this.setResources)
  //   .catch(error => {
  //     console.error(error)
  //     this.setState({error})
  //   })
  // }

  render() {
    // const contextValue = {
    //   resources: this.state.resources,
    // }

    return (
      <div className="App">
        <header className="App__header">
          <Header />
        </header>
        <main className="App__main">
          {this.state.hasError && (
            <p className="red">There was an error! Oh no!</p>
          )}
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route path={"/resources"} component={ResourceListPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route path={"/resource/:resourceId"} component={ResourcePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
