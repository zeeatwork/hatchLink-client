import React, { Component } from 'react';
import Card from './card/Card';
import Header from '../header/Header.js';

class App extends Component {
  state = {
    resources: [],
    error: null,
  };

  setResources = resources => {
    this.setState({
      resources,
      error: null,
    })
  }

  addResource = resourceId => {
    const newResources = this.state.resources.filter(rs =>
      rs.id !== resourceId
      )
      this.setState({
        resources: newResources
      })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET', 
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer: $config.API_KEY}`
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(this.setResources)
    .catch(error => {
      console.error(error)
      this.setState({error})
    })
  }

  render() {
    const contextValue = {
      bookmarks: this.state.bookmarks,
    }

  return(
<main className= 'App'>
  <h1>Resources</h1>
  <ResourceContext.Provider value={contextValue}>
    <Nav />
    <div className='content' aria-live='polite'>
      <Route
      exact
      path='/'
      component={Card}
      />
      <Route
      path='/resource/:resource_id'
      component={Card}
      />
    </div>
  </ResourceContext.Provider>
</main>
  )
  }
}

export default App;