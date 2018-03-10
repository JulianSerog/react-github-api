import React, { Component } from 'react';

import './badge.css';

export default class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row text-center">
          <div className="col-12 badge-container">
            <img className="img profile-img img-circle " alt="Responsive image" src={this.props.image} />
        
        
            <h3><strong>Followers: </strong>{this.props.followers}</h3>
            <h3><strong>Following: </strong>{this.props.following}</h3>
          </div>
      </div>
    );
  }
}