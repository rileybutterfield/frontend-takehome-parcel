import React from 'react';
import { connect } from 'react-redux';
import { SingleGem } from './index';
import { getGemsFromStorage } from '../store/savedGems';

class SavedGems extends React.Component {
  componentDidMount() {
    this.props.getGems();
  }

  render() {
    return (
      <div className="main">
        <h1>Saved Gems</h1>
        <div className="saved-gems">
          {this.props.savedGems.length ? (
            this.props.savedGems.map((gem, idx) => {
              console.log('GEM', gem);
              return <SingleGem gem={gem} key={idx} />;
            })
          ) : (
            <p>No Saved Gems</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedGems: state.savedGems,
});

const mapDispatchToProps = (dispatch) => ({
  getGems: () => {
    dispatch(getGemsFromStorage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SavedGems);
