import React, { Component } from 'react';
import EarthquakeContainer from './containers/EarthquakeContainer.js';

class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past month: </h1>
          <EarthquakeContainer />
        </div>
      </div>
    );
  }
}

export default App;
