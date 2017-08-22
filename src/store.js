import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_MODEL':
      return {
        ...state,
        model: action.model,
        ...action.props
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
