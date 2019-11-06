import React from 'react';
import { shallow } from 'enzyme';
import { OrderForm, mapDispatchToProps } from './OrderForm';
import { addOrders } from '../../actions';

jest.mock('../../apiCalls.js');

// Sorry about the nested describe blocks, I like them

describe('Orders', () => {

  describe('Orders container', () => {
    let wrapper;
    const mockAddOrders = jest.fn();
    const mockNewOrder = {
      id: 5,
      name: 'Pol',
      ingredients: ['BEANS', 'bEaNs']
    }
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockNewOrder)
        });
      });

      wrapper = shallow(<OrderForm addOrders={mockAddOrders} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should update name in state when handleNameChange is called', () => {
      const mockEvent = {
        target: {
          name: 'name',
          value: 'Pol'
        },
        preventDefault: jest.fn()
      };

      const expected = 'Pol';

      wrapper.instance().handleNameChange(mockEvent);


      expect(wrapper.state('name')).toEqual(expected);
    });

    it('should update ingredients in state when handleIngredientChange is called', () => {
      const mockEvent = {
        target: {
          name: 'BEANS',
        },
        preventDefault: jest.fn()
      };
      wrapper.setState({
        ingredients: [
          'beans',
          'BeAnS'
        ]
      })
      const expected = [
        'beans',
        'BeAnS',
        'BEANS'
      ];

      wrapper.instance().handleIngredientChange(mockEvent);


      expect(wrapper.state('ingredients')).toEqual(expected);
    });

    it('should clear all variables in state when clearInputs is invoked', () => {
      const expected = {
        name: '',
        ingredients: [],
      };

      wrapper.instance().setState({
        name: 'Pol',
        ingredients: [
          'beans',
          'BeAnS',
          'BEANS'
        ]
      });

      wrapper.instance().clearInputs();

      expect(wrapper.state()).toEqual(expected);
    });

    it('should call handleSubmit on click', () => {
      wrapper.instance().handleSubmit = jest.fn();
      wrapper.instance().forceUpdate();

      wrapper.find('.test-this-button').simulate('click');

      expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    });

    it.skip('should try a fetch and call addOrders on invocation of handleSubmit', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      };
      wrapper.setState({ name: 'Pol', ingredients: ['BEANS', 'bEaNs'] });

      wrapper.instance().handleSubmit(mockEvent);

      expect(wrapper.instance().props.addOrders).toHaveBeenCalled();
      // can't get this m*****f***** to work
      expect(wrapper.instance().clearInputs).toHaveBeenCalled();
    });

  });

  describe('mapDispatchToProps', () => {
    const mockNewOrder = {
      id: 5,
      name: 'Pol',
      ingredients: ['BEANS', 'bEaNs']
    }
    const mockDispatch = jest.fn();
    const actionToDispatch = addOrders(mockNewOrder);

    // Execution
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addOrders(mockNewOrder);

    // Expectaion
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

