
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Login extends Component {

    render() {
        return (
            <div className="mobile-login">
                <Form className="full-block">
                    <Form.Control className="full-block" color="primary" type="text" value={this.props.password} 
                        onChange={(event) => this.props.updateField(event.target.value)}/>
                </Form>
            </div>
            
        )
    }
}

export default Login;