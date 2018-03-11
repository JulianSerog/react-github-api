import React, { Component } from 'react';

import { getUserByName, getReposFromUser } from '../../utils/github';
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
        this.setState({ user: data });
      }).then(() => {
        getReposFromUser(username).then((data) => {
          this.setState({ repos: data });
        })
      }).catch(() => {
        alert('could not find data for ' + username);
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
    const { username } = this.state;
    return (
      <div className="App container">
        <div>
          <div className="row header">
            <h2 className="col-12 header-text">Search for a github user name</h2>
          </div>
          <div className="search form-group row">
            <label className="col-2 col-form-label">Github username:</label>
              <div className="col-8">
                <input className="form-control" type="text" placeholder="search" value={this.state.username} onChange={this.handleUsernameChange} />
              </div>
            <button className="col-2 btn btn-submit" onClick={this.onSubmitClick}>Submit</button>
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
    const { repos, username } = this.state;
    return ( 
      <div className="repos-container">
        <h2 className="text-center repo-header">Repositories for {username}</h2>
        {repos.map((repo) => {
          return <Card key={repo.id} repo={repo}/>;
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


