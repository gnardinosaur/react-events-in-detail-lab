import React, { Component } from 'react'

class DelayedButton extends Component {
    
    delayedClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
    
    render(){
        return <button onClick={this.delayedClick}>delayed</button>
    }
}

export default DelayedButton