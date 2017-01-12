import React, { Component } from 'react';

export default class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png',
      color: '#fff',
      showForm: false
    }
  }

  saveBackground = (event) => {
    console.log(event);

    event.preventDefault();

    // Get color and image url
    const image = this.image.value;
    const color = this.color.value;

    // Set color and image url
    this.setState({
      showForm: false,
      image,
      color
    })

    this.renderBackground();
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
      <form className="background-form" onSubmit={(e) => this.saveBackground(e)}>
        <input type="text" ref={(input) => this.image = input} defaultValue={this.state.image} required />
        <input type="text" ref={(input) => this.color = input} defaultValue={this.state.color} required />
        <button type="submit">Save</button>
      </form>
    )
  }

  renderBackground = () => {
    const backgroundStyles = {
      backgroundImage: `url('${this.state.image}')`,
      backgroundColor: this.state.color
    }

    return (
      <div className="background-image" style={backgroundStyles}></div>
    )
  }

  render () {
    return (
      <div style={{width: '100%'}}>
        <button className="background-edit" onClick={(e) => this.showForm(e)}>Edit</button>
        {this.renderForm()}
        {this.renderBackground()}
      </div>
    );
  }
}
