import React, { Component } from 'react';

import './badge.css';

export default class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row badge-container">
        <div className="col-4">
            <img className="img-fluid" src={this.props.image} />
        </div>
        <div className="col-8">
            <h3><strong>Followers: </strong>{this.props.followers}</h3>
            <h3><strong>Following: </strong>{this.props.following}</h3>
        </div>
      </div>
    );
  }
}