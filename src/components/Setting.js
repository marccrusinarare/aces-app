
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

const initialState = {
    password: ''
}

class Setting extends Component {

    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem('data')) || null;
        console.log('queue:', data)
        if (data) {
            this.state = data;
        } else {
            this.state = initialState;
        }
    }

    reset = () => {
        localStorage.removeItem('data');
    }

    logout = () => {

    }

    render() {
        return (
            <Container>
                <div className="flex-queue__container">
                    <div>
                        <p>Settings</p>
                    </div>
                    <br/>
                    <div>
                        <Button className="ra-button full-block" onClick={this.reset}>Reset</Button>
                    </div>
                    <br/>
                    <div>
                        {/* <Button className="ra-button full-block" onClick={(event) => this.props.updateField('')}>Logout</Button> */}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Setting;