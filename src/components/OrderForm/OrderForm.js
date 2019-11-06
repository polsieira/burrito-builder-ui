import React, { Component } from 'react';
import { addOrders } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, e.target.name] });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.ingredients.length > 0) {
      this.props.addOrders({ id: Date.now(), ...this.state });
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({ name: '', ingredients: [] });
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
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

        <button onClick={e => this.handleSubmit(e)}>
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