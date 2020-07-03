import React, { Component } from 'react';
import Gallery from '../gallery/gallery.js';
import './incidentForm.css';

class TheTextDrop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: [],
      who: '',
      what: '',
      when: '',
      where: '',
      why: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addToIncidents(this.state);
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  showWidget = () => {
    var widget = window.cloudinary.createUploadWidget({ 
    cloudName: "weatherit", 
    uploadPreset: "theseImages",
    tags: ['banana']
  }, (error, result) => { });
    widget.open()
  }

  render() {
    return (
      <div >
        <div>
        <Gallery />
        </div>
       <button class="image-button" onClick={this.showWidget}>Upload File</button>
       <hr/>
        <form class="incident-form">      
          <textarea
            type="text"
            name="who"
            placeholder="When did it happen?"
            value={this.state.who}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            name="what"
            placeholder="Where did it happen?"
            value={this.state.what}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            //type="datetime-local"
            type="text"
            name="when"
            placeholder="Who was involved?"
            value={this.state.when}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            name="where"
            placeholder="What happened?"
            value={this.state.where}
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="text"
            name="why"
            placeholder="What triggered the event?"
            value={this.state.why}
            onChange={this.handleChange}
          />
          <br /><br />
          <input
            type="submit"
            value="Save Incident"
            className="button"
            onClick={this.handleSubmit}
          />
        </form>
        <hr/>
      </div>
    );
  }
}

export default TheTextDrop;