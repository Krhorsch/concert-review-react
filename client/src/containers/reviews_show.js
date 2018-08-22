import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../actions';
import { Link } from 'react-router-dom'
class ReviewsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchReview(id)
  }

  render() {
    const { review } = this.props;

    if(!review) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{review.artist}</h3>
        <h6>{review.date} {review.venue}</h6>
        <p>{review.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {review: state.reviews.review}
}

export default connect(mapStateToProps, { fetchReview })(ReviewsShow);



// <button
//   className="btn btn-danger pull-xs-right"
//   onClick={this.onDeleteClick.bind(this)}
// >Delete Post</button>
