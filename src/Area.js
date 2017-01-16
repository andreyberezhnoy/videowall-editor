import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import Text from './Text';
import Background from './Background';

let collection = {
  text: Text,
  background: Background
}

const boxTarget = {
  drop(props, monitor, component) {
    props.onDrop(monitor.getItem());
  }
};

class Area extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    onDrop: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.droppedComponents = this.droppedComponents.bind(this);
  }

  droppedComponents() {
    return this.props.components.map((component, index) => {
      const Widget = collection[component.type];
      return <Widget key={component.type + index}/>;
    });
  }

  render() {
    const { isOver, connectDropTarget } = this.props;

    // Area defaul backgroundColor
    let backgroundColor = '#fff';

    if (isOver) {
      backgroundColor = '#cecece';
    }

    return connectDropTarget(
      <div className='area flex' style={{ ...this.props.style, backgroundColor}}>

        {this.droppedComponents()}

      </div>
    );
  }
}

export default DropTarget(ItemTypes.WIDGET, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(Area);
