export const orders = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return action.orders;
    case 'ADD_ORDERS':
      return [...state, action.newOrder];
    case 'DELETE_ORDER':
      return state.filter(order => {
        return order.id !== parseInt(action.id)
      });
    default:
      return state;
  }
};
