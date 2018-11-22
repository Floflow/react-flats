import React, { Component } from 'react';
import flats from '../../data/flat.js';
import FlatMap from './flat_map.jsx';
import FlatList from './flat_list.jsx';

class App extends Component {
  constructor() {
    super();

    this.state= {
      flats: flats
    }
  }
  render() {
    return(
      <div>
        <FlatList flats = {this.state.flats} />
        <div className="map-container">
          <FlatMap />
        </div>
      </div>
    );
  }
}

export default App;
