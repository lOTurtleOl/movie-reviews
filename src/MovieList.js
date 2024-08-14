import React from 'react';
import Movie from './Movie';
import avatarImg from './images/avatar-img.jpg';
import antManImg from './images/ant-man-img.jpg';
import shrekImg from './images/shrek-img.png';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    id: 1,
                    title: "Avatar",
                    image: avatarImg,
                    synopsis: "On the lush alien world of Pandora, a paraplegic Marine becomes torn between following his orders and protecting the world he feels is his home after inhabiting an alien body."
                },
                {
                    id: 2,
                    title: "Ant-Man",
                    image: antManImg,
                    synopsis: "On the lush alien world of Pandora, a paraplegic Marine becomes torn between following his orders and protecting the world he feels is his home after inhabiting an alien body."
                },
                {
                    id: 3,
                    title: "Shrek",
                    image: shrekImg,
                    synopsis: "An ogre's peaceful life is disrupted when a group of fairy-tale creatures invades his swamp, leading him on a quest to rescue a princess for a scheming lord in exchange for reclaiming his land."
                }
            ]
        };
    }
    render() {
        return (
            <div>
                {this.state.movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        );
    }
}