import React from 'react';

export class SingleGem extends React.Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
    this.handleUnsave = this.handleUnsave.bind(this);
  }

  handleSave(e) {
    //something here
    // this.setState({ query: e.target.value });
  }

  handleUnsave(e) {
    //something here
    // this.setState({ query: e.target.value });
  }

  render() {
    const { name, downloads, gem_uri, info, version } = this.props.gem;
    return (
      <div className="single-gem-wrapper">
        <a href={gem_uri}>
          <h5>{name}</h5>
        </a>
        <span>
          version: {version} downloads: {downloads}
        </span>
        <p>{info}</p>
        <button>Save Gem</button>
      </div>
    );
  }
}

export default SingleGem;
