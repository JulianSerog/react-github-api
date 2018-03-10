import React, { Component } from 'react';

import { getUserByName, getReposFromUser } from '../../utils/github';
import logo from '../../logo.svg';
import './Home.css';

// components
import Badge from '../badge/badge';
import Card from '../card/card';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      user: null,
      repos: null
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
      getUserByName(username).then((data) => {
        console.log('user: ', data);
        this.setState({ user: data });
      }).then(() => {
        getReposFromUser(username).then((data) => {
          console.log('repos: ', data);
          this.setState({ repos: data });
        })
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

  renderSearch() {
    const { user, username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h4>Search for a github user name</h4>
          <div className="search form-group row">
            <label className="col-2 col-form-label">Github username:</label>
              <div className="col-8">
                <input className="form-control" type="text" placeholder="search" value={this.state.username} onChange={this.handleUsernameChange} />
              </div>
            <button className="col-1 btn btn-primary" onClick={this.onSubmitClick}>Submit</button>
          </div>
        </div>
      </div>
    );
  }

  renderBadge() {
    const { user } = this.state;
    return (
      <div>
        <Badge image={ user.avatar_url } name={user.name} followers={user.followers} following={user.following} />
      </div>
    );
  }

  renderRepos() {
    const { repos } = this.state;
    return ( 
      <div className="repos-container">
        {repos.map((repo) => {
          <Card repo={repo}/>
        })}
      </div>
    );
  }

  render() {
    const { user, repos } = this.state;
    return (
      <div className="container">
        {this.renderSearch()}
        { (user !== null) ? this.renderBadge() : null }
        { ( repos !== null ) ? this.renderRepos() : null }
      </div>
    );
  }
}


