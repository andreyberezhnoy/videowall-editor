import React, { Component } from 'react';

const textAreaStyles = {
  color: '#2d353c',
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  fontSize: '3rem',
  textAlign: 'center',
  width: '100%',
  resize: 'none'
}

export default class Text extends Component {
  constructor (props) {
    super(props);
    this.state = {value: 'Text'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <div className='flex flex-center' style={{width: '100%'}}>
        <h2 style={{display: 'none'}}>{this.state.value}</h2>
        <textarea style={textAreaStyles} type="text" onChange={this.handleChange} value={this.state.value}/>
      </div>
    );
  }
}
