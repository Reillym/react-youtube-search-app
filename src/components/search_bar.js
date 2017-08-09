import React from "react";

// Stateful Class Component
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.input}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search"
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ input: term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
