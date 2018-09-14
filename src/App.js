import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import routes from './routes'
import Nav from './components/Nav/Nav'
// import Dashboard from './components/Dashboard/Dashboard'
// import Form from './components/Form/Form'
// import Post from './components/Post/Post'
// import Auth from './components/Auth/Auth'

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        { this.props.location.pathname === '/' ?
        null
        :
        <Nav />
        }
        {routes}
        {/* <Auth />
        <Dashboard />
        <Form />
        <Post /> */}
      </div>
    );
  }
}

// const ShowTheLocationWithRouter = withRouter(App)
export default withRouter(App);
