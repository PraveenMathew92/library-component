import React from 'react';
import "../css/BookTiles.css";
import BookDetails from './BookDetails';

const BookTiles = (props) => (
    <div className="bookTiles" onClick="/">
            NAME: {props.name}<br />
            AUTHOR: {props.author}<br />
            ISBN: {props.isbn}<br />
        </div>
);

export default BookTiles;