// prevents rule warning from being thrown for the Regex in line 6
/* eslint-disable */

import React from 'react';

// source: https://www.educative.io/answers/react-form-validation
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {
        name: '',
        email: '',
        message: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 1
            ? 'This field is required!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'message': 
        errors.message = 
          value.length < 1
            ? 'This field is required!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='wrapper'>
        <div className='form-wrapper'>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='name'>
              <label htmlFor="name">Name</label>
              <input type='text' name='name' onChange={this.handleChange} noValidate />
              {errors.name.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
            </div>
            <div className='message'>
              <label htmlFor="message">Message</label>
              <input type='message' name='message' onChange={this.handleChange} noValidate />
              {errors.message.length > 0 && 
                <span className='error'>{errors.message}</span>}
            </div>
            <div className='submit'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
