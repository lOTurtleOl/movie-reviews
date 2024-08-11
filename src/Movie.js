import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: ' '
        };
    }

    render() {
        return(
            <p>{this.state.movie}</p>
        )
    }
}