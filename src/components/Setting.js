
import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Divider, Form, Input, InputNumber, message } from 'antd';

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
        message.info('Reset data successfully');
    }

    logout = () => {

    }

    onChange = async (event) => {
        await this.setState({ scAmount: event})
        if (this.state.users)
            localStorage.setItem('data', JSON.stringify(this.state));
    }

    render() {
        let { scAmount } = this.state;
        console.log('render', scAmount)
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
                    <Divider/>
                    <div>
                        <Form.Item
                            label="SC Amount"
                            name="scamount"
                            rules={[{ required: true, message: 'Please input sc amount!' }]}
                        >
                            <InputNumber min={10} max={50} defaultValue={scAmount} onChange={(e) => this.onChange(e)} />
                        </Form.Item>
                        {/* <Button className="ra-button full-block" onClick={(event) => this.props.updateField('')}>Logout</Button> */}
                    </div>
                </div>
            </Container>
        )
    }
}

export default Setting;