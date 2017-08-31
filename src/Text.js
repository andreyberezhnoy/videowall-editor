import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const Text = ({ id, areaId, settings, onUpdate, elementChange }) => (
  <div className='flex flex-center' style={{width: '100%'}}>
    <h2 style={{display: 'none'}}>{settings.text}</h2>
    <textarea style={textAreaStyles}
              type='text'
              onChange={(event) => elementChange(areaId, id, { text: event.target.value })}
              value={settings.text}/>
  </div>
)

Text.propTypes = {
  id: PropTypes.number,
  areaId: PropTypes.number,
  settings: PropTypes.object,
  onUpdate: PropTypes.func
}

const elementChange = (areaId, itemId, settings) => (dispatch) => {
  dispatch({ type: 'ELEMENT_CHANGE', areaId, itemId, settings });
}

export default connect(
  null,
  { elementChange }
)(Text);
