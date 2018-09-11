import React, {Component} from 'react';
import EarthquakeModel from '../models/Earthquake';
import Earthquakes from '../components/Earthquakes';

class EarthquakeContainer extends Component{
    state = {
        results: []
    }
    componentDidMount = () => {
        this.fetchData()
    }
    fetchData = () => {
        EarthquakeModel.all()
            .then((res) => {
            console.log("2", res)
            this.setState({
                results: res.data.features,
            })
        })
    }
    render = () => {
        return(
            <div className="earthquakeComponent">
                <Earthquakes results={this.state.results}/>
            </div>
        )
    }
}

export default EarthquakeContainer