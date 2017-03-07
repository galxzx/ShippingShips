import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './checkoutValidate';


//SetUp to use stripe
const stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const elements = stripe.elements();
const style = {
      base: {
        color: 'black',
        lineHeight: '24px',
        fontFamily: 'Helvetica Neue',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: 'black'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }

const card = elements.create('card', {style})


const renderField = ({ input, label, type, meta: {touched, error} }) => {
  return (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control field" />
    {touched && error && <span>{error}</span>}
  </div>
)}

class Checkout extends Component {
  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){

    // if(!document.getElementsByClassName('_PrivateStripeElement'))
    card.mount('#card-element')
    card.addEventListener('change', function(event) {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    })
  }

  componentWillUnmount(){
    card.unmount()
  }

  onSubmit (address){
    console.log('address=======>', address)
    stripe.createToken(card)
    .then(token => {
      this.props.checkoutCart(address, token)
    })
    .catch(console.error)
  }

  render(){

    const handleSubmit = this.props.handleSubmit;
    const submitting = this.props.submitting;
    return (
      <div className="well">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="name" type="text" className="form-control field" component={renderField} id="name" label="Name" />
          <Field name="streetAddress" type="text" className="form-control field" component={renderField} id="streetAddress" label="Street Address" />
          <Field name="city" type="text" className="form-control field" component={renderField} id="city" label="City" />
          <Field name="state" type="text" className="form-control field" component={renderField} id="state" label="State" />
          <Field name="zipcode" type="text" className="form-control field" component={renderField} id="zipcode" label="Zipcode" />
          <div className="form-row">
          <label htmlFor="card-element">Credit or debit card</label>
          <div id="card-element" className="field">

          </div>

          <div id="card-errors"></div>
          </div>
          <button type="submit" disabled={submitting} className="btn btn-primary">Checkout</button>
        </form>


      </div>
    )
  }
}

export default Checkout;
