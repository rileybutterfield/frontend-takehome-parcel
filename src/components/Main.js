import React from 'react';
import { connect } from 'react-redux';
import { fetchResult } from '../store/result';
import { SearchBar, SingleGem } from './index';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Search Gems</h1>
        <SearchBar />
        <div className="searchResults">
          {this.props.result.length ? (
            this.props.result.map((res, idx) => {
              localStorage.getItem(res.name)
                ? (res.saved = true)
                : (res.saved = false);
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
  savedGems: state.savedGems,
});

const mapDispatchToProps = (dispatch) => ({
  getResult: (queryStr) => {
    dispatch(fetchResult(queryStr));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
