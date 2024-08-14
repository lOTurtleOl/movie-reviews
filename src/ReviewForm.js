import React from 'react';
import Review from './Review';
import ReviewList from './ReviewList';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newReview: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({newReview: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.newReview.trim()) {
            this.props.addReview(this.state.newReview);
            this.setState({newReview: ''});
        }
    }

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