import * as actions from '../actions';

describe('order actions', () => {
  it('should have a type of SET_ORDERS and all the orders as a payload ', () => {
    const orders = [
      {
        id: 1,
        name: 'Pol',
        ingredients: ['beans', 'more beans', 'more more beans']
      },
      {
        id: 2,
        name: 'Lucy',
        ingredients: ['beans', 'more beans', 'more more beans']
      },
      {
        id: 1,
        name: 'Kate',
        ingredients: ['beans', 'more beans', 'more more beans']

      }
    ]

    const expectedAction = {
      type: "SET_ORDERS",
      orders,
    };

    expect(actions.setOrders(orders)).toEqual(expectedAction)
  });

  it('should have a type of ADD_ORDERS and a new order as a payload ', () => {
    const newOrder = {
      id: 4,
      name: 'Sam',
      ingredients: ['beans', 'more beans', 'more more beans']
    }


    const expectedAction = {
      type: "ADD_ORDERS",
      newOrder,
    };

    expect(actions.addOrders(newOrder)).toEqual(expectedAction)
  });
})