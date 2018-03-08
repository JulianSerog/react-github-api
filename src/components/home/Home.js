import React, { Component } from 'react';

import getUserByName from '../../utils/github';
import logo from '../../logo.svg';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: null,
      user: null
    }

    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { username } = this.state;
    if(username) {
      getUserByName(username).then((payload) => {
        console.log(payload.data);
        this.setState({ user: payload.data });
      });
    }
  }

  onSubmitClick() {
    this.fetchData();
  }

  handleUsernameChange(e) {
    if(e) {
      this.setState({ username: e.target.value });
    }
  }

  render() {
    const { user, username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h4>Search for a github user name</h4>
          <div className="search">
            Github username: <input type="text" placeholder="search" value={this.state.username} onChange={this.handleUsernameChange} />
            <button onClick={this.onSubmitClick}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}


