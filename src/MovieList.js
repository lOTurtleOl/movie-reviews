import React from 'react';
import Movie from './Movie';
import Stars from './Stars';
import { useState } from 'react';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    id: 1,
                    title: "A Quiet Place",
                    image: ""
                }
            ]
        }
    }
    render() {
        return (
            <header>
                <Movie />
                <Stars />
            </header>
        )
    }
}