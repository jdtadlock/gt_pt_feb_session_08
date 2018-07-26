import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Dispatches
function updateTitle(e) {
  return dispatch => {
    dispatch({
      type: 'UPDATE TITLE',
      payload: e.target.value
    });
  }
}

function getQuote() {
  return dispatch => {
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(({ data }) => {
        dispatch({
          type: 'UPDATE QUOTE',
          payload: data[0].content
        })
      });
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input type="text" onChange={this.props.updateTitle} placeholder="Title" value={this.props.title}/>

        <p>{this.props.quote.replace(/<[^>]*>/gi, '')}</p>

        <button onClick={this.props.getQuote}>Gets a Quote</button>
      </div>
    );
  }
}

const whichPropsShouldAppHave = (state, props) => {
  return {
    title: state.title,
    quote: state.quote
  }
} 

// function updateTitle(a, b, c) {
//   console.log(a, b, c);
// }

const dispatches = {
  updateTitle,
  getQuote
};

export default connect(whichPropsShouldAppHave, dispatches)(App);
