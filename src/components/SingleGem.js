import React from 'react';
import { connect } from 'react-redux';
import { addGemToStorage, removeGemFromStorage } from '../store/savedGems';

export class SingleGem extends React.Component {
  constructor() {
    super();
    this.state = {
      saved: false,
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem(this.props.gem.name)) {
      this.setState({ saved: true });
    }
  }

  handleSave(e) {
    this.setState({ saved: true });
    this.props.saveGem(this.props.gem);
  }

  handleUnsave(e) {
    this.setState({ saved: false });
    this.props.removeGem(this.props.gem);
  }

  render() {
    const {
      name,
      downloads,
      documentation_uri,
      info,
      version,
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
          onClick={this.state.saved ? this.handleUnsave : this.handleSave}
        >
          {this.state.saved ? 'Unsave Gem' : 'Save Gem'}
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveGem: (gem) => {
    dispatch(addGemToStorage(gem));
  },
  removeGem: (gem) => {
    dispatch(removeGemFromStorage(gem));
  },
});

export default connect(null, mapDispatchToProps)(SingleGem);
