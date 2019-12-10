import React, { Component } from 'react'

class CoordinatesButton extends Component {
    
    receiveCoordinates = (event) => {
        let arr = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(arr)
    }
    
    render(){
        return <button onClick={this.receiveCoordinates}>coordinates</button>
    }
}

export default CoordinatesButton
