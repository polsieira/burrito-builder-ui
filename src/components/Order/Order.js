import React from 'react';
import './Order.css';


const Order = ({ order, handleDeleteOrder }) => {
  return (
    <div className="order">
      <h3>{order.name}</h3>
      <ul className="ingredient-list">
        {order.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
      <h4>{order.price ? `$${order.price}` : 'No price'}</h4>
      <button id={order.id} type='button' className='delete-order' onClick={(e) => handleDeleteOrder(e)}>Delete</button>
    </div>
  )
}

export default Order;