import React, { Component } from 'react';
import { addOrders } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewOrder } from '../../apiCalls';

export class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: [],
      price: 0
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    if (!this.state.ingredients.includes(e.target.name)) {
      this.setState({ ingredients: [...this.state.ingredients, e.target.name] });
      console.log(e.target.dataset.price)
      this.setState({ price: this.state.price + parseFloat(e.target.dataset.price) });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.name && this.state.ingredients.length > 0) {
      if (this.state.name === 'Robbie' || 'Travis') {
        throw new Error('Sorry your burrito sucks')
      }
      try {
        const data = await addNewOrder(this.state);
        this.props.addOrders(data);
      } catch ({ message }) {
        // do something with error action
      }
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({ name: '', ingredients: [] });
  }

  render() {
    const possibleIngredients = [{ name: 'beans', price: .99 }, { name: 'steak', price: .99 }, { name: 'carnitas', price: .99 }, { name: 'sofritas', price: .99 }, { name: 'lettuce', price: .10 }, { name: 'queso fresco', price: .99 }, { name: 'pico de gallo', price: .99 }, { name: 'hot sauce', price: .10 }, { name: 'guacamole', price: 1.99 }, { name: 'jalapenos', price: .99 }, { name: 'cilantro', price: .10 }, { name: 'sourcream', price: .99 }];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient.name} name={ingredient.name} data-price={ingredient.price} onClick={e => this.handleIngredientChange(e)}>
          {ingredient.name}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(', ') || 'Nothing selected'}</p>

        <button className='test-this-button' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addOrders
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(OrderForm);