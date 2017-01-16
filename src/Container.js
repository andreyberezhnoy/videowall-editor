import React, { Component } from 'react';
import Area from './Area';
import Widget from './Widget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'react/lib/update';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: [
        {
          style: {
            width: '50%',
            height: '40%'
          },
          components: []
        },
        {
          style: {
            width: '50%',
            height: '40%'
          },
          components: []
        },
        {
          style: {
            width: '100%',
            height: '20%'
          },
          components: []
        },
        {
          style: {
            width: '100%',
            height: '40%'
          },
          components: []
        },
      ]
    };
  }

  render() {
    return (
      <div className='main flex'>
        <div className='sidebar flex flex-column'>
          <span className='sidebar__heading'>Components</span>

          <div className='widget-area flex flex-wrap'>
            <Widget type='text' title='Text' />
            <Widget type='image' title='Image' />
            <Widget type='background' title='Background' />
          </div>
        </div>

        <div className='editor-wrapper flex flex-center'>
          <div className='editor-container flex flex-wrap'>
            {this.state.layout.map(({style, components}, index) =>
              <Area key={index}
                    style={style}
                    components={components}
                    onDrop={(item) => this.handleDrop(index, item)} />
            )}
          </div>
        </div>
      </div>
    );
  }

  handleDrop(index, item) {
    this.setState(update(this.state, {
      layout: {
        [index]: {
          components: {
            $push: [item]
          }
        }
      }
    }));
  }
}



export default DragDropContext(HTML5Backend)(Container);
