import React, { Component } from 'react';
import Area from './Area';
import Widget from './Widget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Container extends Component {
  render() {
    return (
      <div className='main flex'>
        <div className='sidebar flex flex-column'>
          <span className='sidebar__heading'>Components</span>

          <div className='widget-area flex flex-wrap'>
            <Widget type='text' title='Text' />
            <Widget type='image' title='Image' />
          </div>
        </div>

        <div className='editor-wrapper flex flex-center'>
          <div className='editor-container flex flex-wrap'>
            <Area style={{
              width: '70%',
              height: '40%'
            }}>
            </Area>

            <Area style={{
              width: '30%',
              height: '40%'
            }}>

            </Area>

            <Area style={{
              width: '100%',
              height: '40%'
            }}>

            </Area>

            <Area style={{
              width: '100%',
              height: '20%'
            }}>

            </Area>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);
