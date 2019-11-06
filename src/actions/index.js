export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const addOrders = newOrder => ({
  type: 'ADD_ORDERS',
  newOrder
});

export const deleteOrder = id => ({
  type: 'DELETE_ORDER',
  id
})
