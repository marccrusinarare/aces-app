
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const initialState = {
    password: '',
    hours: [0,1,2,3,4,5,6,7,8],
    users: []
}

class Court extends Component {

    constructor() {
        super();
        // let data = JSON.parse(localStorage.getItem('data')) || null;
        // if (data) {
        //     this.state = { ...data };
        // } else {
        //     this.state = initialState;
        // }
        // console.log('queue:', this.state)
        
    }

    
    render() {
        return (
            <Container>
                {/* <div className="flex-queue__container">
                    <div className="">
                        This feature is not yet available.
                        {this.state.users?.map((user, i) => (
                            <div className="court__flex">
                                <label className="court-name">
                                    {user.name}
                                </label>
                                {this.state.hours.map((user, i) => ( 
                                    <label className="court-hour">
                                        <input
                                            type="checkbox"
                                            key={i} 
                                            id={i}
                                            />
                                    </label>
                                ))}
                                <label className="court-total">0</label>
                            </div> 
                        ))}
                    </div>
                </div> */}
            </Container>
        )
    }
}

export default Court;