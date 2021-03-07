import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { BsCheckCircle } from 'react-icons/bs';
import { FcFullTrash } from 'react-icons/fc';

const initialState = {
    password: '',
    user: '',
    users: [],
    tempUsers: [],
    selectedUsers: [],
    queue: []
}

class Set extends Component {

    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem('data')) || null;
        if (data) {
            this.state = {
                ...data,
                selectedUsers: []
            };
        } else {
            this.state = initialState;
        }
    }

    handleInput = async (event) => {
        var val = event.target.value;
        await this.setState({ user: val.toUpperCase() })
        
        localStorage.setItem('data', JSON.stringify(this.state))
    }

    handleInputPw = (event) => {
        var val = event.target.value;
        this.setState({ password: val })
    }


    handleClick = () => {
        let users = this.state.users; 
        users.push({
            name: this.state.user,
            id: this.state.users.length,
            checked: false,
            sc: 0,
            total: 0,
            court: {
                hours: [],
                total: 0
            }
        })
        this.setState({users: [ ...users ], user: ''})
    }
    handleInputCheckbox = async (event) => {
        let users = this.state.users; 
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log('value', value)
        const id = parseInt(target.id);
        users.forEach((user, i) => {
            if(user.id === id) {
                users[i] = {
                    ...user,
                    checked: value
                }
            }
        });

        let selectedUsers = await users.filter((user) => { return user.checked });
        await this.setState({
            selectedUsers: selectedUsers
        })

        if (selectedUsers.length === 4) {
            await this.setState({
                tempUsers: users,
                // users: selectedUsers
            })
        } else {
            let tempUsers = this.state.tempUsers || [];
            tempUsers.forEach((user, i) => {
                if(user.id === id) {
                    tempUsers[i] = {
                        ...tempUsers[i],
                        checked: value
                    }
                }
            });
            console.log('tempuser', tempUsers)
            console.log('state', this.state)
            await this.setState({
                tempUsers: [],
                // users: (tempUsers.length > 0) ? tempUsers : users
            })
        }
    }

    play = async () => {
        let selectedUsers = this.state.selectedUsers;
        let queue = this.state.queue;
        let users = this.state.users;
        users.map((user) => {
            return user.checked = false;
        })
        queue.push(selectedUsers);
        selectedUsers = [];

        await this.setState({
            users: users,
            queue: queue,
            selectedUsers: []
        })
        console.log('play', this.state)
        this.compute();
    }

    compute = async () => {
        let users = this.state.users;
        let queue = this.state.queue;

        users.forEach((user) => {
            user.sc = 0;
            user.total = 0;
            queue.forEach(q => {
                q.forEach(element => {
                  if (element.name === user.name) {
                    user.sc++;
                    user.total = user.total + 20; 
                  }  
                });
            });
        })
        console.log('compute state', this.state)
        await this.setState({
            users: this.state.users,
            menu: 'queue'
        })
        console.log('compute state1', this.state)
        localStorage.setItem('data', JSON.stringify(this.state));
        // this.props.history.push('/queue');
        // this.props.navigate('queue')
    }

    remove = (event) => {
        let ind = parseFloat(event.target.dataset.x);
        let queue = this.state.queue;
        let newQueue = [];
        
        queue.forEach((element, i) => {
            if (i !== ind) {
                newQueue.push(element);
            }
        });
        
        this.setState({
            queue: newQueue
        })
        setTimeout(() => {
            
            this.compute();
        }, 1000);
    }

    removeUser = async (event) => {
        let ind = parseFloat(event.target.dataset.x);
        console.log('remove clicked', ind, event)
        let users = this.state.users;
        let newUsers = [];
        users.forEach(user => {
            if(ind !== user.id)
            newUsers.push(user);
        });
        
        await this.setState({
            users: newUsers
        })
        console.log('new users', newUsers)
    }

    render() {
        return (
            <Container>
                <div> 
                    <Form className="full-block">
                        <Row>
                            <Col xs={10} className="remove-padding-center">
                                <Form.Control color="primary" type="text" value={this.state.user} 
                                        onChange={this.handleInput} placeholder="Name of player"/>
                            </Col>
                            <Col xs={2} className="remove-padding-center">
                                <Button className="full-block ra-button" disabled={this.state.user === ''} onClick={this.handleClick} >
                                    <HiOutlineUserAdd className="button__add-icon"/> 
                                </Button> 
                            </Col>
                                
                            {/* <input type="text" onInput={this.handleInput} value={this.state.user}/> */}
                        </Row>
                    </Form>
                    <div className="flex-queue__container">
                        <div className="flex-queue">
                            {this.state.users.map((user, i) => (
                                <label key={i} className={"queue-member" + ((user.checked) ? " selected":"")}> 
                                    <input
                                        type="checkbox"
                                        key={user.id} 
                                        id={user.id}
                                        checked={user.checked}
                                        onChange={this.handleInputCheckbox}
                                        hidden/>
                                        <div className="queue-icon">
                                            { (user.checked) ?
                                                <BsCheckCircle /> : <div/>
                                            }
                                        </div>
                                        <h6 className="name">{user.name}</h6>
                                        <small>{user.sc}SC &bull; ₱{user.total}</small> 
                                        {/* <button data-x={user.id} onClick={this.removeUser} className="remove-icon">
                                            <FcFullTrash />
                                        </button> */}
                                </label>
                            ))}
                        </div>
                    </div>
                    { (this.state.selectedUsers.length > 0) ?
                    <div>
                        {/* <h2>Set:</h2> */}
                            {/* {this.state.selectedUsers.map(user => (
                                <div>
                                    <label>
                                        {user.name}
                                    </label>
                                </div>
                            )
                        )} */}
                        <Button className="ra-button full-block" onClick={this.play}>Set
                            {/* {this.state?.selectedUsers?.map((selectedUser, k) => (
                                <span>{selectedUser} { (k === this.state.selectedUsers.length - 1) ? <span>&bull;</span> : <span></span>}</span>
                            ))} */}
                        </Button>
                    </div> 
                            : <div></div> 
                            }
                    
                </div>
            </Container>
            )
    }
}

export default Set;