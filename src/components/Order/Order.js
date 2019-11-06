import React from 'react';
import './Order.css';


const Order = ({ order }) => {
  return (
    <div className="order">
      <h3>{order.name}</h3>
      <ul className="ingredient-list">
        {order.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
      <button type='button' className='delete-order'>Delete</button>
    </div>
  )
}

export default Order;