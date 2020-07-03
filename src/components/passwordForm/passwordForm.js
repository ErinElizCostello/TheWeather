import React from 'react';
import { Redirect } from 'react-router-dom';
import './passwordForm.css'


class PasswordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      save: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addToPasswords(this.state);
    this.setState({ save: true });
    this.setState({ password: '' });
  }

  handleChange = (ev) => {
    this.setState({ password: ev.target.value })
  }

  render() {
    if (this.state.save === true) {
      return <Redirect to='/weather' />
    }

    return (
      <div className="password-form">
        <div class="row">
          <div class="col-sm-4"></div>
          <div class="col-sm-4">
            <div class="password-text">
              <p>Select a password here.<br /> On the weather page, enter your password into "city", and you will be taken to the secret page.</p>
            </div>
          </div>
          <div class="col-sm-4"></div>
        </div>
        <form>
          <div class="form-group">
            <input
              class="form-control"
              type="text"
              name="password"
              autocomplete="off"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            /><br />
            <input
              type="submit"
              value="save"
              class="input-button"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default PasswordForm;