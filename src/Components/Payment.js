
import React, { useState } from 'react';

const Payment = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        // Mock payment logic
        alert('Payment successful for amount: ' + amount);
    };

    return (
        <div>
            <h2>Payment</h2>
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay</button>
        </div>
    );
};

export default Payment;
