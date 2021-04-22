import React from 'react';
import { connect } from 'react-redux';
import { addGemToStorage, removeGemFromStorage } from '../store/savedGems';

export class SingleGem extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   saved: false,
    // };
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.savedGems.includes(this.props.gem)) {
  //     this.setState({ saved: true });
  //   }
  // }

  handleSave() {
    // this.setState({ saved: true });
    this.props.gem.saved = true;
    this.props.saveGem(this.props.gem);
  }

  handleUnsave() {
    // this.setState({ saved: false });
    this.props.gem.saved = false;
    this.props.removeGem(this.props.gem);
  }

  render() {
    const {
      name,
      downloads,
      documentation_uri,
      info,
      version,
      saved,
    } = this.props.gem;
    return (
      <div className="single-gem-wrapper">
        <a href={documentation_uri} target="_blank">
          <h5>{name}</h5>
        </a>
        <p>
          <b>version:</b> {version} <b>downloads:</b>
          {downloads}
        </p>
        <p>{info}</p>
        <button
          className="btn"
          onClick={saved ? this.handleUnsave : this.handleSave}
        >
          {saved ? 'Unsave Gem' : 'Save Gem'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  savedGems: state.savedGems,
});

const mapDispatchToProps = (dispatch) => ({
  saveGem: (gem) => {
    dispatch(addGemToStorage(gem));
  },
  removeGem: (gem) => {
    dispatch(removeGemFromStorage(gem));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleGem);
