import Immutable from 'immutable';

const initialState = Immutable.Map({
  orders: []
})

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_ORDERS':
      return state.set('orders', action.orders);
    default:
      return state;
  }
}