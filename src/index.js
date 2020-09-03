import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { get my icon list } from '@fortawesome/free-solid-svg-icons'
import * as serviceWorker from './serviceWorker'
import { ResourceListProvider } from './contexts/ResourceListContext'
import { ResourceProvider } from './contexts/ResourceContext'
import App from './components/App/App'
import './index.css'

// library.add(
//  figureout font awesome
// )

ReactDOM.render(
  <Router>
    <ResourceListProvider>
      <ResourceProvider>
        <App />
      </ResourceProvider>
    </ResourceListProvider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
