import React, { Component } from 'react';

import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row badge-container">
        <div className="col-12">
            <h3><strong>Name: </strong>{this.props.repo.name}</h3>
            <h3><strong>Description: </strong>{this.props.repo.description}</h3>
            <h3><strong>URL: </strong>{this.props.repo.url}</h3>
            <h3><strong>Stars: </strong>{this.props.repo.stargazers_count}</h3>
            <h3><strong>Forks: </strong>{this.props.repo.forks_count}</h3>
            <h3><strong>Open Issues: </strong>{this.props.repo.open_issues_count}</h3>
            <h3><strong>Repo Size: </strong>{this.props.repo.size}</h3>
        </div>
      </div>
    );
  }
}