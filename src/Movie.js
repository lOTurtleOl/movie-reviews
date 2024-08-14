import React from 'react';
import Stars from './Stars';
import "./App.css";
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [] // Array to store reviews
        };
        this.addReview = this.addReview.bind(this);
    }

    // Function to add a review
    addReview(newReview) {
        this.setState(state => ({
            reviews: [...state.reviews, newReview]
        }));
    }
    
    render() {
        const {movie} = this.props;

        return (
            <div className="container d-flex justify-content-center">
                <div className="card mb-5 w-75 align-items-center text-center">
                <img className="card-img-top" src={movie.image} alt={movie.title} />
                <div className="card-body">
                    <h2 className="card-title">{movie.title}</h2>
                    <p className="card-text">{movie.synopsis}</p>
                    <Stars name="Star Rating"/>
                </div>
                <ReviewForm addReview={this.addReview} />
                <ReviewList reviews={this.state.reviews} />
                
                
                
                {/* <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <h1>Review List</h1>
                        </div>
                        <div className="col">
                            <h1>Review List</h1>
                        </div>
                        <div className="col">
                            <h1>Review List</h1>
                        </div>
                    </div>                    
                </div>
                <div className="card-footer w-100">
                    <h1>Review Form</h1>
                </div> */}
                </div>
            </div>
            
        );
    }
}