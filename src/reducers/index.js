import update from 'react/lib/update';

const reducer = (state={ layout: [] }, action) => {
  switch (action.type) {
    case 'DROP_ELEMENT':

      const { index, item } = action;

      return update(state, {
        layout: {
          [index]: {
            components: {
              $push: [item]
            }
          }
        }
      });

      // break;
    case 'ELEMENT_CHANGE':

      const { areaId, itemId, settings } = action;

      return update(state, {
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
      });

      // break;
    case 'GET_LAYOUT':
      state.layout = [
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
      return state

      // break;
    default:
      return state
  }
}

export default reducer
