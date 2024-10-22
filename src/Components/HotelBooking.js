
import React, { useState } from 'react';

const HotelBooking = () => {
    const [hotels, setHotels] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        // Mock search logic for hotel data
        setHotels([{name: 'Hotel A'}, {name: 'Hotel B'}, {name: 'Hotel C'}]);
    };

    return (
        <div>
            <h2>Hotel Booking</h2>
            <input
                type="text"
                placeholder="Search for hotels"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={index}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HotelBooking;
