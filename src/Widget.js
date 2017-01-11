import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DragSource } from 'react-dnd';

const widgetSource = {
  beginDrag(props) {
    return {
      type: props.type
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
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
