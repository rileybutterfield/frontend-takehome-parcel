import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchResult } from '../store/result';

class Main extends React.Component {
  componentDidMount() {
    const query = 'hello whats up';
    this.props.getResult(query);
  }
  render() {
    return <h1>From Main file</h1>;
  }
}

const mapStateToProps = (state) => ({
  result: state.result,
});

const mapDispatchToProps = (dispatch) => ({
  getResult: (queryStr) => {
    dispatch(fetchResult(queryStr));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
