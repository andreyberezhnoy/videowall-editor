import React, { Component } from 'react';

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png',
      showForm: false
    }
  }

  saveImage = (event) => {
    event.preventDefault();

    // Get color and image url
    const image = this.image.value;

    // Set color and image url
    this.setState({
      showForm: false,
      image
    })

    this.renderImage();
  }

  showForm = (event) => {
    this.setState({
      showForm: true
    })

    this.renderForm();
  }

  renderForm = () => {
    if (!this.state.showForm) return false;

    return (
      <form className="edit-form" onSubmit={(e) => this.saveImage(e)}>
        <input type="text" ref={(input) => this.image = input} defaultValue={this.state.image} required />
        <button type="submit">Save</button>
      </form>
    )
  }

  renderImage = () => {
    return (
      <div className="image-wrap">
        <img style={{width: '100%'}} src={this.state.image} alt="" />
      </div>
    )
  }

  render () {
    return (
      <div style={{width: '100%'}}>
        <button className="edit-form-btn" onClick={(e) => this.showForm(e)}>Edit</button>
        {this.renderForm()}
        {this.renderImage()}
      </div>
    );
  }
}
