import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'
import SinList from './sin_list'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>Hello World</div>
                <SinList/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);
