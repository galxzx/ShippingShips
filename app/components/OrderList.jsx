import React, { Component } from 'react';
import { Link } from 'react-router';


class OrderList extends Component {
  constructor(props){
    super()
    this.state = {
      status: props.order.status
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({status: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.changeOrderStatus(this.props.order.id, this.state.status)
  }

  render(){
    const order = this.props.order
    return (

      <li key={order.id} className="well">
        <Link to={`/admin/orders/${order.id}`}>
          {`Order Id: ${order.id}`} <br/> {`Order Total: ${order.total}`}<br/>{ `Order Status: ${order.status}`}
        </Link>
        <form onSubmit={this.handleSubmit} >
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="created">created</option>
            <option value="processing">processing</option>
            <option value="cancelled">cancelled</option>
            <option value="completed">completed</option>
          </select>
          <button type="submit">change</button>
        </form>
      </li>
    )
  }
}

export default OrderList
