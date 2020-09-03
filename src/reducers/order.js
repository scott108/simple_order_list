const initialState = {
  orders: []
}

export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}