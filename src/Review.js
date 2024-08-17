import React from 'react';

//review format display function
export default function Review(props) {
    return (
        <li className="col-4">
            {props.text}
        </li>
    );
}