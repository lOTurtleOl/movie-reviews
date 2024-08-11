import React from 'react';
import { useState } from 'react';
import starImg from './images/star-img.jpg';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            stars: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(this.state.stars < 5 ? state => ({stars: state.stars + 1}): state => ({stars: state.stars = 0}));
    }

    render() {
        return(
            <div>
                <button
                className="star-button"
                onClick={this.handleClick}>
                    <div className="star-container">
                        <img src={starImg} alt="Image of a review star" className="star-image"/>
                        <span className="star-text">{this.state.stars}</span>
                    </div>
                </button>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}