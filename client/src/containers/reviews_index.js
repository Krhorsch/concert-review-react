import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchReviews } from '../actions'
import { bindActionCreators } from 'redux'
import _ from 'lodash';

class ReviewsIndex extends Component {

  componentDidMount() {
    this.props.fetchReviews();
  }

  renderPosts() {

    return _.map(this.props.reviews.reviews, review => {
      return(
        <li className="list-group-item" key={review.id}>
          <Link to={`/reviews/${review.id}`}>{review.artist} - {review.venue} - {review.date}</Link>
        </li>
      )}
    )
  }

  render() {
    const styles = {backgroundImage: "url('https://s3.pixers.pics/pixers/700/FO/60/32/90/71/700_FO60329071_74d47f9ccf286c38f19982640cc21127.jpg')"}
    return (
      <div style={styles}>
        <h3>Reviews</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { reviews: state.reviews }
}

export default connect(mapStateToProps, {fetchReviews})(ReviewsIndex);
