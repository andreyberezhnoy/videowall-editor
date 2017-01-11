import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import Text from './Text';
import Background from './Background';

let collection = {
  text: <Text />,
  background: <Background />
}

const boxTarget = {
  drop(props, monitor, component) {
    const hasDroppedOnChild = monitor.didDrop();
    if (hasDroppedOnChild && !props.greedy) {
      return;
    }

    component.setState({
      hasDropped: true,
      hasDroppedOnChild: hasDroppedOnChild,
      draggedItem: monitor.getItem()
    });
  }
};

class Area extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOverCurrent: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hasDropped: false,
      hasDroppedOnChild: false
    };
  }

  render() {
    const { isOverCurrent, connectDropTarget } = this.props;
    const { hasDropped, hasDroppedOnChild } = this.state;

    // Area defaul backgroundColor
    let backgroundColor = '#fff';

    if (isOverCurrent) {
      backgroundColor = '#cecece';
    }

    return connectDropTarget(
      <div className='area flex' style={{ ...this.props.style, backgroundColor}}>

        {this.state.draggedItem && collection[this.state.draggedItem.type]}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.WIDGET, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true })
}))(Area);
