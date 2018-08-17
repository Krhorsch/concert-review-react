import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../actions'
import { bindActionCreators } from 'redux'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import _ from 'lodash';

class ReviewsIndex extends Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  renderPosts() {

    return _.map(this.props.reviews, review => {
      return(
        <li className="list-group-item" key={review.id}>
          {review.artist}
        </li>
      )}
    )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/reviews/new">
            Add a Review
          </Link>
        </div>
        <h3>Reviews</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, {fetchReviews})(ReviewsIndex);
