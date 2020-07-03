import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';import Login from './components/login'
import WeatherRoot from './components/weatherPage/weatherRoot'
import IncidentContainer from './components/incidents/incidentContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Login} exact />
        <Route path='/weather/' exact component={WeatherRoot} />
        <Route path='/private' exact strict component={IncidentContainer} />
      </Router>
    </div>
  );
}

export default App;
