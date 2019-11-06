import React from 'react';
import './Order.css';
import { deleteOrder } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Order = ({ order, deleteOrder }) => {
  return (
    <div className="order">
      <h3>{order.name}</h3>
      <ul className="ingredient-list">
        {order.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
      <button id={order.id} type='button' className='delete-order' onClick={(e) => deleteOrder(e.target.id)}>Delete</button>
    </div>
  )
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    deleteOrder
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Order);