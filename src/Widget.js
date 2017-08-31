import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const widgetSource = {
  beginDrag(props) {
    return {
      type: props.type,
      settings: props.settings
    };
  },

  endDrag(props, monitor) {
    //
  }
};

class Widget extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
  }

  render() {
    const { connectDragSource, title } = this.props;

    return connectDragSource(
      <div className='widget flex flex-center'>
        <span>{title}</span>
      </div>
    );
  }
}

export default DragSource(ItemTypes.WIDGET, widgetSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Widget);
