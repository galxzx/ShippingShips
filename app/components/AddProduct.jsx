import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';




const renderField = ({ input, label, type, meta: {touched, error} }) => {
  return (
  <div className="form-group">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} className="form-control field" />
    {touched && error && <span>{error}</span>}
  </div>
)}

class AddProduct extends Component {



  render(){

    const handleSubmit = this.props.handleSubmit;
    const submitting = this.props.submitting;
    return (
      <div className="well">
        <h2>AddProduct</h2>
        <form onSubmit={handleSubmit(this.props.addProduct)}>
          <Field name="title" type="text" className="form-control field" component={renderField} id="title" label="Title" />
          <Field name="description" type="text" className="form-control field" component={renderField} id="description" label="Description" />
          <Field name="price" type="text" className="form-control field" component={renderField} id="price" label="Price" />
          <Field name="inventory" type="text" className="form-control field" component={renderField} id="inventory" label="Inventory" />
          <Field name="photoUrl" type="text" className="form-control field" component={renderField} id="photoUrl" label="photoUrl" />
          <Field name="categories" type="text" className="form-control field" component={renderField} id="categories" label="Categories" />
          <button type="submit" disabled={submitting} className="btn btn-primary">Add Product</button>
        </form>


      </div>
    )
  }
}

export default AddProduct;
