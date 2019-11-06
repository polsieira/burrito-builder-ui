import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapStateToProps, mapDispatchToProps } from './Orders';
import { setOrders } from '../../actions';

// jest.mock('../../apiCalls.js');

// Sorry about the nested describe blocks, I like them

describe('Orders', () => {

  describe('Orders container', () => {
    let wrapper;
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
    ];
    const mockSetOrders = jest.fn();

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockOrders)
        });
      });
      wrapper = shallow(<Orders orders={mockOrders} setOrders={mockSetOrders} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });


  describe('mapStateToProps', () => {
    it('should return an object with orders', () => {
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
      const mockState = {
        orders: mockOrders,
        errorMsg: 'You got an error fool',
        isLoading: false
      };

      const expected = {
        orders: mockOrders
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('calls dispatch with an setOrders action when componentDidMount is called', () => {
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
      ];
      const mockDispatch = jest.fn();
      const actionToDispatch = setOrders(mockOrders);

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOrders(mockOrders);

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});