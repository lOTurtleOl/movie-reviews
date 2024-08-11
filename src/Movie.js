import React from 'react';
import Stars from './Stars';
import MovieList from './MovieList';
import "./App.css";

export default class Movie extends React.Component {
    render() {
        const {movie} = this.props;

        return (
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.image} alt={movie.title} className="movieImg" />
                <p>{movie.synopsis}</p>
                <Stars name="Star Rating"/>
            </div>
        )
    }
}