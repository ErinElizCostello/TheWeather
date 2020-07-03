import React from 'react';
import TheLog from './theLog.js';
import TheTextDrop from './theTextDrop.js';

class IncidentContainer extends React.Component {
  state = {
    incident: []
  }

  componentDidMount() {
    this.getAllIncidents();
  }

  getAllIncidents() {
    fetch('http://localhost:3001/upload')
      .then(response => response.json())
      .then(data => {
        this.setState({ incident: data.reverse() })
      })
  }

  addToIncidents = (incident) => {
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(incident),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ incident: [data, ...this.state.incident] })
      })
  }

  render() {
    return (
      <div className="mommy">
        <div >
          <TheTextDrop
            addToIncidents={this.addToIncidents}
          />
        </div><br></br>
        <TheLog
          incident={this.state.incident}
        />
      </div>
    );
  }
}

export default IncidentContainer;