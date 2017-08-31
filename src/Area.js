import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    props.dropElement(props.id, monitor.getItem());
  }
};

class Area extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    dropElement: PropTypes.func.isRequired
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
                              settings={component.settings} />
        })}
      </div>
    );
  }
}

const dropElement = (index, item) => (dispatch) => {
  dispatch({ type: 'DROP_ELEMENT', index, item });
}

Area = DropTarget(ItemTypes.WIDGET, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
}))(Area);

export default connect(
  null,
  { dropElement }
)(Area);
