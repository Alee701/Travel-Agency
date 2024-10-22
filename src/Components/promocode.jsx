// src/components/PromoCode.js
import React, { useState } from 'react';

const PromoCode = () => {
    const [promoCode, setPromoCode] = useState('');
    const [message, setMessage] = useState('');
    const validCodes = ['DISCOUNT10', 'SAVE20']; // Example valid codes

    const handleApply = () => {
        if (validCodes.includes(promoCode.toUpperCase())) {
            setMessage('Promo code applied! You got a discount.');
        } else {
            setMessage('Invalid promo code. Please try again.');
        }
    };

    return (
        <div>
            <h2>Apply Promo Code</h2>
            <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApply}>Apply</button>
            <p>{message}</p>
        </div>
    );
};

export default PromoCode;
