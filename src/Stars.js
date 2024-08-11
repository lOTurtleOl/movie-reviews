import React from 'react';

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0
        }
    }

    render() {
        return(
            <div>
                <p>{this.state.stars}</p>
                <button img src="images/star-img.jpg" alt="Image of a review star">
                className="btn btn-primary"
                onClick={this.handleClick}
                {this.state.stars}
                </button>
            </div>
            
        )
    }
}