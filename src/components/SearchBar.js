import React from 'react';
import { connect } from 'react-redux';
import { fetchResult } from '../store/result';

export class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getResult(this.state.query);
  }

  render() {
    return (
      <div className="query-box">
        <form onSubmit={this.handleSubmit}>
          <div id="inner-query-box">
            <div id="submit-row">
              <input
                value={this.state.query}
                type="text"
                onChange={this.handleChange}
                placeholder="Search for a gem"
              />
            </div>
            <button className="btn" type="submit" name="action">
              Search
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getResult: (queryStr) => {
    dispatch(fetchResult(queryStr));
  },
});

export default connect(null, mapDispatchToProps)(SearchBar);
