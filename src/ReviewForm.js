import React from 'react';
import Review from './Review';
import ReviewList from './ReviewList';

// empty array to hold newReview
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newReview: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // method that sets the state of the newReview variable to the value as it's updated
    handleInputChange(event) {
        this.setState({newReview: event.target.value});
    }

    // method to prevent default submission, use addReview attribute function to add the new review
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.newReview.trim()) {
            this.props.addReview(this.state.newReview);
            this.setState({newReview: ''});
        }
    }

    // return reviewForm html
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="mb-3">
                    <label htmlfor="review" className="form-label">Leave a Review!</label>
                    <input type="text" className="form-control" id="review" value={this.state.newReview} onChange={this.handleInputChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )}
}