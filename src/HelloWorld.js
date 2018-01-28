import React, { Component } from 'react';
import './HelloWorld.css';


class HelloWorld extends Component {
    constructor (props) {
        super (props);
        this.state = { greeting: 'Hello' };
        this.spanishify = this.spanishify.bind(this);
        this.lebanify = this.lebanify.bind(this);
    }
    spanishify() {
        this.setState({ greeting: 'Hola' });
    }
    lebanify() {
        this.setState({ greeting: 'Hi, keefak, sa va' });
    }
    render () {
        return (
            <div className="HelloWorld">
            {this.state.greeting} {this.props.name}!
            <br/>
            <button onClick={this.spanishify}>Spanishify!</button>
            <button onClick={this.lebanify}>Lebanify!</button>
            </div>
        );
    }
}

/* const HelloWorld = props => {
  return (<div className="HelloWorld">Hello {props.name}!</div>);
}; */

export default HelloWorld;