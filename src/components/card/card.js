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
        </div>
      </div>
    );
  }
}