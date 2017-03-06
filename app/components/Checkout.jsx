import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './checkoutValidate'


const renderField = ({ input, label, type, meta: {touched, error} }) => {
  console.log(error)
  return (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
)}

export function Checkout ({handleSubmit, submitting}){
  return (
    <div className="well">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit(event => {
      event.preventDefault()
      })}>
        <Field name="name" type="text" className="form-control" component={renderField} id="name" label="Name" />
        <Field name="streetAddress" type="text" className="form-control" component={renderField} id="streetAddress" label="Street Address" />
        <Field name="city" type="text" className="form-control" component={renderField} id="city" label="City" />
        <Field name="state" type="text" className="form-control" component={renderField} id="state" label="State" />
        <Field name="zipcode" type="text" className="form-control" component={renderField} id="zipcode" label="Zipcode" />
        <Field name="cardNumber" type="text" className="form-control" component={renderField} id="cardNumber" label="Card Number" />
        <Field name="expMonth" type="text" className="form-control" component={renderField} id="expMonth" label="Expiration Month" />
        <Field name="expYear" type="text" className="form-control" component={renderField} id="expYear" label="Expiration Year" />
        <Field name="cvc" type="text" className="form-control" component={renderField} id="cvc" label="cvc" />
        <button type="submit" disabled={submitting} className="btn btn-primary">Checkout</button>
      </form>


    </div>
  )
}

export default reduxForm({
  form: 'checkout',
  validate
})(Checkout)
