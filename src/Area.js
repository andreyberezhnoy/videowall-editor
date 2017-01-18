import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import Text from './Text';
import Background from './Background';
import Image from './Image';

const collection = {
  text: Text,
  background: Background,
  image: Image
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
    onDrop: PropTypes.func.isRequired,
    handleUpdates: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.droppedComponents = this.droppedComponents.bind(this);
  }

  droppedComponents(props) {
    return this.props.components.map((component, index) => {
      const DroppedComp = collection[component.type];
      return <DroppedComp key={index}
                          id={index}
                          areaId={this.props.id}
                          settings={component.settings}
                          onUpdate={this.props.handleUpdates} />
    })
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
