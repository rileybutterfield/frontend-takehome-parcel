import React from 'react';
import { connect } from 'react-redux';
import { fetchResult } from '../store/result';
import { SearchBar, SingleGem } from './index';

class Main extends React.Component {
  // componentDidMount() {
  //   const query = 'rails';
  //   this.props.getResult(query);
  // }
  render() {
    console.log('in render', this.props.result);
    return (
      <div className="main">
        <SearchBar />
        <div className="searchResults">
          {this.props.result.length ? (
            this.props.result.map((res, idx) => {
              return <SingleGem gem={res} key={idx} />;
            })
          ) : (
            <p>No results</p>
          )}
        </div>
      </div>
    );
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
