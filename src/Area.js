import React, { Component, PropTypes } from 'react';
import ItemTypes from './ItemTypes';
import { DropTarget } from 'react-dnd';
import Text from './Text';
import Background from './Background';
import Image from './Image';
import { connect } from 'react-redux';

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
    elementChange: PropTypes.func.isRequired
  }

  render() {
    const { isOver, connectDropTarget, style, id, elementChange } = this.props;

    // Area defaul backgroundColor
    let backgroundColor = '#fff';

    if (isOver) {
      backgroundColor = '#cecece';
    }

    return connectDropTarget(
      <div className='area flex' style={{ ...style, backgroundColor}}>
        {this.props.components.map((component, index) => {
          const DroppedComp = collection[component.type];
          return <DroppedComp key={index}
                              id={index}
                              areaId={id}
                              settings={component.settings}
                              onUpdate={elementChange} />
        })}
      </div>
    );
  }
}

const elementChange = (areaId, itemId, settings) => (dispatch) => {
  dispatch({ type: 'ELEMENT_CHANGE', areaId, itemId, settings });
}

Area = DropTarget(ItemTypes.WIDGET, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(Area);

export default connect(
  null,
  { elementChange }
)(Area);
