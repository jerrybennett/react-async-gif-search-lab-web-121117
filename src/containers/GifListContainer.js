import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const query = 'cat'

export default class GifListContainer extends React.Component {

  state = {
    data: [],
    search: ''
  }

  getJifs = (query) => fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(json => this.setState({data: json.data.slice(0, 3), search: ''}))

  handleSubmit = (e) => {
    e.preventDefault()
    this.getJifs(this.state.search)
  }

  handleChange = (e) => this.setState({search: e.target.value});

  render() {
    console.log(this.state.search);
    return (
      <div>
        <GifSearch search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <GifList {...this.state}/>
      </div>
    );
  }
}
