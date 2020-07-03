import React from 'react';
import PasswordForm from './passwordForm/passwordForm'

class Login extends React.Component {
  state = {
    pass: []
  }

  addToPasswords = (password) => {
    fetch('http://localhost:3001/login', {
      method: 'POST',
      mode: "cors",
      body: JSON.stringify(password),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pass: data })
      })
  }

  render() {
    return (
      <div className="app">
        <PasswordForm addToPasswords={this.addToPasswords} />
      </div>
    );
  }
}

export default Login;
