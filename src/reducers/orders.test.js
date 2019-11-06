import { orders } from './orders';

describe('orders reducer', () => {
  it('should return the initial state', () => {
    const expectedState = [];

    const result = orders(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return set orders', () => {
    const mockOrders = [
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
        id: 3,
        name: 'Kate',
        ingredients: ['beans', 'more beans', 'more more beans']

      }
    ]
    const mockAction = {
      type: 'SET_ORDERS',
      orders: mockOrders
    }

    const expectedState = mockOrders;

    const result = orders(undefined, mockAction);

    expect(result).toEqual(expectedState);
  });

  it('should return add an order', () => {
    const initialState = [
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
        id: 3,
        name: 'Kate',
        ingredients: ['beans', 'more beans', 'more more beans']

      }
    ]
    const newOrder = {
      id: 4,
      name: 'Sam',
      ingredients: ['beans', 'more beans', 'more more beans']
    }
    const mockAction = {
      type: 'ADD_ORDERS',
      newOrder
    }

    const expectedState = [...initialState, newOrder];

    const result = orders(initialState, mockAction);

    expect(result).toEqual(expectedState);
  });
});