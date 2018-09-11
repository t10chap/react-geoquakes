import React, {Component} from 'react';

class Earthquake extends Component{
    render(){
        console.log(this.props.results);
        let qR = this.props.results.map((eq, index) => {
            return(
                <p key={index}>{eq.properties.title}</p>
            )
        })
        console.log(qR);
        return(
            <div className="quakeList">{qR}</div>
        )
    };
}

export default Earthquake;