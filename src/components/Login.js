
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Login extends Component {
    // state = {
    //     losers: [1,2,3,4,6],
    //     winners: [3,4,4,6,8], 
    //     newRecords: [],
    //     output: '',
    //     input: null
    // }
    
    // componentDidMount() {
    //     let { losers, winners, newRecords } = this.state;
    //     winners.forEach((winnerElement, index) => {
    //         let loser = losers[index];
    //         let winner = winners[index];
    //         let isWinnerExists = losers.includes(winnerElement);
    //         if (isWinnerExists) { 
    //             while (isWinnerExists) {
    //                 let loserIndex = losers.findIndex(loser => winner == loser);
    //                 console.log(loserIndex)
    //                 winner = winners[loserIndex];
    //                 isWinnerExists = losers.includes(winner);
    //             }

    //         }  
    //         newRecords.push({ loser: loser, winner: winner });  
            
    //     });   
    //     this.setState({losers, winners, newRecords})
    //     console.log('New Records:', newRecords);
        
    // }

    // onInput(value) {
    //     console.log(value);
    //     this.setState({output: null, input: null});
    //     const { newRecords } = this.state;
    //     newRecords.map((record) => {
    //         if(record.loser == value) {
    //             this.setState({output: 'Output: ' + record.winner, input: null})
    //         }
    //     })
    // }

    render() {
        const { losers, winners, newRecords, input, output } = this.state;
        return (
            <div className="mobile-login">
                {/* <div>
                    <table>
                        {losers.map((loser, index) => (
                            <tr>
                                <td>| {loser} | </td>
                                <td>| {winners[index]} |</td>
                            </tr>
                        ))}
                    </table>
                </div>
                <hr />
                <div>
                    <Form className="full-block">
                        <Form.Control className="full-block" color="primary" type="text" value={input}
                            onChange={(event) => this.onInput(event.target.value)}/>
                            {output}
                    </Form>
                </div> */}
                <Form className="full-block">
                    <Form.Control className="full-block" color="primary" type="text" value={this.props.password} 
                        onChange={(event) => this.props.updateField(event.target.value)}/>
                </Form>
            </div>
            
        )
    }
}

export default Login;