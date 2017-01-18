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

    this.handleUpdates = this.handleUpdates.bind(this);
  }

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
            {this.state.layout.map(({style, components}, index) =>
              <Area key={index}
                    id={index}
                    style={style}
                    components={components}
                    onDrop={(item) => this.handleDrop(index, item)}
                    handleUpdates={this.handleUpdates} />
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

  handleUpdates(areaId, itemId, settings) {
    this.setState(update(this.state, {
      layout: {
        [areaId]: {
          components: {
            [itemId]: {
              settings: {
                $set: settings
              }
            }
          }
        }
      }
    }));
  }
}

export default DragDropContext(HTML5Backend)(Container);
