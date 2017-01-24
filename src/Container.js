import React, { Component } from 'react';
import Area from './Area';
import Widget from './Widget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

class Container extends Component {
  render() {
    return (
      <div className='main flex'>
        <div className='sidebar flex flex-column'>
          <span className='sidebar__heading'>Components</span>

          <div className='widget-area flex flex-wrap'>
            <Widget type='text' title='Text' settings={{text: 'Text'}} />
            <Widget type='image' title='Image' />
            <Widget type='background' title='Background' />
          </div>
        </div>

        <div className='editor-wrapper flex flex-center'>
          <div className='editor-container flex flex-wrap'>
            {this.props.layout.map(({style, components}, index) =>
              <Area key={index}
                    id={index}
                    style={style}
                    components={components}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  layout: state.layout
});

Container = DragDropContext(HTML5Backend)(Container);

export default connect(
  mapStateToProps,
  null
)(Container)
