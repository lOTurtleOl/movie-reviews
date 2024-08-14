import React from 'react';

export default function Review(props) {
    return (
        <li className="col-4">
            {props.text}
        </li>
    );
}