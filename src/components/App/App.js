import React, { Component } from "react";
import Header from "../Header/Header";
import ResourceListPage from "../../routes/ResourceListPage/ResourceListPage";
import ResourceDetailsPage from "../../routes/ResourceDetailsPage/ResourceDetailsPage";
import LandingPage from "../LandingPage/LandingPage.js";
import AddResource from "../AddResource/AddResource";
import LoginPage from "../../routes/LoginPage/LoginPage";
import { Route, Switch, withRouter } from "react-router-dom";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "../../routes/NotFoundPage/NotFoundPage";
import "./App.css";
import ReviewForm from "../ReviewForm/ReviewForm.js";
import UpdateFormPage from "../../routes/UpdateFormPage/UpdateFormPage";
import ResourceListContext from "../../contexts/ResourceListContext";

class App extends Component {
  static contextType = ResourceListContext;
  // state = {
  //   hasError: false,
  // };

  // static getDerivedStateFromError(error) {
  //   console.error(error);
  //   return { hasError: true };
  // }
  setResources = (resources) => {
    this.setState({
      resources,
      error: null,
    });
  };

  addResource = (resourceId) => {
    const newResources = this.state.resources.filter(
      (rs) => rs.id !== resourceId
    );
    this.setState({
      resources: newResources,
    });
  };

  componentDidMount() {
    this.context.getAllResources();
  }

  // componentDidMount() {
  //   fetch(config.API_ENDPOINT, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer: $config.API_KEY}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         return res.json().then((error) => Promise.reject(error));
  //       }
  //       return res.json();
  //     })
  //     .then(this.setResources)
  //     .catch((error) => {
  //       console.error(error);
  //       this.setState({ error });
  //     });
  // }

  render() {
    // const contextValue = {
    //   resources: this.state.resources,
    // }

    return (
      <div className="App">
        <header className="App__header">
          <Header history={this.props.history} />
        </header>
        <main className="App__main">
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <Route exact path={"/resources"} component={ResourceListPage} />
            <Route path={"/login"} component={LoginPage} />
            <Route path={"/add-resource"} component={AddResource} />
            <Route path={"/register"} component={RegistrationPage} />
            <Route
              exact
              path={"/resources/:resourceId/edit"}
              component={UpdateFormPage}
            />
            <Route
              exact
              path={"/resources/:resourceId"}
              component={ResourceDetailsPage}
            />
            <Route
              exact
              path={"/resources/:resourceId/add-review"}
              component={ReviewForm}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
