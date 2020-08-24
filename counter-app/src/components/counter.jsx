import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  render() { 
    return (
      <div>
        { this.state.tags.length === 0 && <p> There are no tags </p> }
        <ul> { this.state.tags.map(tag => <li key={tag}> {tag} </li>) } </ul>
      </div>
    );
  }

  renderList() {
    const { tags } = this.state
    return tags.length === 0 ? <p> There are no tags </p> : <ul> { tags.map(tag => <li key={tag}> {tag} </li>) } </ul>
  }
}

export default Counter;

