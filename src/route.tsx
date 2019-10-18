import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Guide from './views/Guide';
import Index from './views/Index';
import Login from './views/Login';
import Room from './views/Room';
import Playback from './views/Playback';

class App extends React.Component{
  render(){
    return (
      <Router>
        {
          // <Link to="/">Index</Link>
        }
        <Route path="/" exact component={Guide} />
        <Route path="/index" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/room" component={Room} />
        <Route path="/playback" component={Playback} />
      </Router>
    );
  }
}

export default App;
