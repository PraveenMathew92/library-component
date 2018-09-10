import React from 'react';
import BookTiles from './BookTiles';

const HomePage = () => (
    <div>
        <input placeholder="Book Name"></input>
        <button type="submit">SEARCH</button>
        <br />
        <BookTiles name="Wings Of Fire" author="Abdul Kalam" isbn="1234" />
        <BookTiles name="A Thousand Splendid Suns" author="khaleed Housini" isbn="547" />
        <BookTiles name="The Art of War" author="Sun Tzu" isbn="967" />
    </div>
);

export default HomePage;