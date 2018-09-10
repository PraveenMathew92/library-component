import React from 'react';

const BookDetails = (props) => (
    <div>
        BOOK NAME : {props.name}<br />
        AUTHOR : {props.author}<br />
        ISBN : {props.isbn}<br />
        <button type="submit">BORROW</button>
    </div>
);

export default BookDetails;