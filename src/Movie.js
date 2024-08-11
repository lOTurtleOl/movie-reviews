import React from 'react';
import Stars from './Stars';
import MovieList from './MovieList';
import "./App.css";

export default class Movie extends React.Component {
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
                <div className="container text-center">
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
                </div>
                </div>
            </div>
            
        )
    }
}