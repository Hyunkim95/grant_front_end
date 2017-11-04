import React, { Component } from 'react';
import { Search, Container } from 'semantic-ui-react';
import style from './search.css'

class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Search
          fluid
          open= {false}
          onSearchChange= {this.props.onChange}
        />
      </Container>
    );
  }
}

export default SearchBar
