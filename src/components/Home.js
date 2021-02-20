import React, { Component } from 'react';

const initialState = {
    password: ''
}

class Home extends Component {

    constructor() {
        super();
        this.state = initialState; 
    }

    handleClick(event) {
        var val = event.target.value;
        console.log("🚀 ~ file: Home.js ~ line 16 ~ Home ~ handleClick ~ val", val)
    }

    render() {
        return (
            // <input onInput={this.handleClick}/>
            <p>Home1</p>

            
            )
    }
}

export default Home;