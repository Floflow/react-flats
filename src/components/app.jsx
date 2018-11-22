import React, { Component } from 'react';
import FlatMap from './flat_map.jsx';
import Marker from './marker.jsx';
import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <div className="flat-list"></div>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;
