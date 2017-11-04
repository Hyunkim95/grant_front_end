import React, { Component } from 'react';
import SearchBar from './search/search'
import Results from './results/Results'
import data from './data/data.json'
import _ from 'lodash'

const source = data.data

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: []
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result['Category'])

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  render() {
    return (
      <div id="root">
        <br/>
        <SearchBar
          onChange={this.handleSearchChange}
        />
        <Results
          results={this.state.results}
        />
      </div>
    );
  }
}

export default App;
