import React from 'react';


class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            inc : 0
        }

    }
    incrementCounter = () => {
        this.setState ({
            inc: this.state.inc + 1
        })
    }

    decrementCounter = () => {
        this.setState ({
            inc: this.state.inc - 1
        })
    }
    render(){
        return (
            <div>
                <button onClick ={this.incrementCounter}>{this.props.sinName} ++</button>
                <button onClick ={this.decrementCounter}>{this.props.sinName} --</button>
                <h4>{this.state.inc}</h4>  
            </div> 
        )
    }
}
 export default Counter;