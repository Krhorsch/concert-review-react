import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addReview } from '../actions';

class ReviewsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: '',
      date: '',
      venue: '',
      content: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  onInputChange(event) {
    this.setState({...this.state,
      [event.target.name]: event.target.value})
  }

  onSubmit(values) {
    this.props.addReview(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return(
      <div>
        <h3>Submit A New Review</h3>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <Field
            label="Artist"
            name="artist"
            component={this.renderField}
          />
          <Field
            label="Date"
            name="date"
            component={this.renderField}
          />
          <Field
            label="Venue"
            name="venue"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'ReviewsNewForm'
})(
  connect(null, {addReview})(ReviewsNew)
);
