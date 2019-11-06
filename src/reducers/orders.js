export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'ADD_ORDERS':
      console.log([...state, action.newOrder])
      return [...state, action.newOrder];
    default:
      return state;
  }
};
