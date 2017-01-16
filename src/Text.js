import React, { PropTypes } from 'react';

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

const Text = ({ id, areaId, settings, onUpdate }) => (
  <div className='flex flex-center' style={{width: '100%'}}>
    <h2 style={{display: 'none'}}>{settings.text}</h2>
    <textarea style={textAreaStyles}
              type='text'
              onChange={(event) => onUpdate(areaId, id, { text: event.target.value })}
              value={settings.text}/>
  </div>
)

Text.propTypes = {
  id: PropTypes.number,
  areaId: PropTypes.number,
  settings: PropTypes.object,
  onUpdate: PropTypes.func
}

export default Text
