
import './App.css';
import { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

import Home from './components/Home';
import Set from './components/Set';
import Login from './components/Login';
import { GiCampfire, GiSettingsKnobs, GiShuttlecock, GiTennisCourt, GiTennisRacket } from 'react-icons/gi';
import Queue from './components/Queue';
import Court from './components/Court';
import Setting from './components/Setting';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      password: '',
      menu: 'set', // set, queue, court, settings 
    }
  }

  updateField(value) {
    console.log('value:', value);
    this.setState({ 
      password: value
    });

  }

  navigate = (value) => {
    this.setState({
      menu: value
    })
  }

  render() {  
    return (
      <div className="mobile-container">
        { (this.state.password !== 'aces') ?
          <Login password={this.state.password} updateField={(value) => this.updateField(value)}/> :
          <div className="mobile-content">
            <Router>
              <small className="aces-label">ACES</small>
              <div className="navigation">
                <div className="navigation-item">
                  <GiCampfire/>
                </div>
                <Link className={"navigation-item" + (this.state.menu === 'set' ? ' active': '')} onClick={() => this.navigate('set')} to="/"> 
                  <div>
                    <GiTennisRacket/>
                  </div>
                  <div className="label">Set</div>
                </Link> 
                <Link className={"navigation-item" + (this.state.menu === 'queue' ? ' active': '')} onClick={() => this.navigate('queue')} to="/queue">
                  <div>
                    <GiShuttlecock/>
                  </div>
                  <div className="label">Queue</div>
                </Link>
                <Link className={"navigation-item" + (this.state.menu === 'court' ? ' active': '')} onClick={() => this.navigate('court')} to="/court">
                  <div>
                    <GiTennisCourt/>
                  </div>
                  <div className="label">Court</div>
                </Link>
                <Link className={"navigation-item" + (this.state.menu === 'settings' ? ' active': '')} onClick={() => this.navigate('settings')} to="/setting">
                  <div>
                    <GiSettingsKnobs/>
                  </div>
                  <div className="label">Settings</div>
                </Link>
              </div>
              <Route exact path='/' component={Set} /> 
              <Route exact path='/home' component={Home} />
              <Route exact path='/queue' component={Queue} />
              <Route exact path='/court' component={Court} />
              {/* TODO: CHECK ON HOW TO ACCESS FUNCTION FROM HERE */}
              <Route exact path='/setting' component={Setting} render={(props) => <Setting { ...props } updateField={(value) => this.updateField(value)}/>} />
            </Router>
          </div> 
        }
      </div>
    );
  }
}

export default App;
