import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

const GET_GREETING = 'GET_GREETING';
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS';

function getGreeting() {
  console.log('getGreeting(), action');
  return (dispatch) => {
    dispatch({ type: GET_GREETING });
    return fetch('v1/greeting.json')
      .then(response => response.json())
      .then((json) => {
        dispatch(getThingsSuccess(json));
      }).catch((error) => {
        console.error(error);
      }
    );
  }
}

export function getThingsSuccess(json) {
  return {
    type: GET_GREETING_SUCCESS,
    payload: json,
  };
}

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
        <button onClick={this.props.getGreeting}>Get Greeting</button>
      </div>
    );
  }
}

const structureSelector = createStructuredSelector({
  greeting: state => state.greeting,
});

const mapDispatchToProps = dispatch => ({
  getGreeting: () => dispatch(getGreeting()),
});

Greeting.propTypes = {
  getGreeting: PropTypes.string,
};

export default connect(structureSelector, mapDispatchToProps)(Greeting);
