
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const initialState = {
    password: '',
    queue: []
}

class Queue extends Component {

    constructor() {
        super();
        let data = JSON.parse(localStorage.getItem('data')) || null;
        console.log('queue:', data)
        if (data) {
            this.state = data;
        } else {
            this.state = initialState;
        }
    }

    handleClick(event) {
        var val = event.target.value;
        console.log("🚀 ~ file: Home.js ~ line 16 ~ Home ~ handleClick ~ val", val)
    }

    render() {
        return (
            <Container>
                <div className="flex-queue__container">
                    <div>
                        <h2>Queue:</h2>
                            {this.state.queue.map((q, i) => (
                                <div>
                                    <hr/>
                                    <label>
                                        Queue {i+1}: <button data-x={i} onDoubleClick={this.remove}>x</button>
                                    </label>
                                    <br></br>
                                    {q.map((user) => (
                                        
                                        <label>
                                            &nbsp;{user.name}
                                        </label> 
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Queue;