import React, { Component } from 'react';

export default class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_284x96dp.png'
    }
  }

  saveBackground = (event) => {
    event.preventDefault();

    const url = this.backgroundUrl.value;
    this.setState({ url })

    if (!this.state.url) return false;

    console.log(event);

    this.renderBackground();
  }

  renderInput = () => {
    return (
      <form className="background-form" onSubmit={this.saveBackground}>
        <input type="text" ref={(input => {this.backgroundUrl = input})} defaultValue={this.state.url} />
      </form>
    )
  }

  renderBackground = () => {
    if (!this.state.url) return false;

    return (
      <div className="background-image">
        <img style={{width: '100%'}} src={this.state.url} alt=""/>
      </div>
    )
  }

  render () {
    return (
      <div style={{width: '100%'}}>
        {this.renderInput()}
        {this.renderBackground()}
      </div>
    );
  }
}
