import React, { Component } from 'react';
import './Orders.css';
import { getOrders } from '../../apiCalls';
import Order from '../Order/Order';
import { connect } from 'react-redux';
import { setOrders } from '../../actions';
import { bindActionCreators } from 'redux';


export class Orders extends Component {

  componentDidMount() {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    const { orders } = this.props;
    const orderEls = orders.map(order => {
      return (
        <Order order={order} key={order.id} />
      )
    });
    return (
      <section>
        {orderEls.length ? orderEls : <p>No orders yet!</p>}
      </section >
    )
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setOrders
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);