import React from 'react';
import "../css/BookTiles.css";

const BookTiles = (props) => (
    <div className="bookTiles">
            NAME: {props.name}<br />
            AUTHOR: {props.author}<br />
            ISBN: {props.isbn}<br />
        </div>
);

export default BookTiles;