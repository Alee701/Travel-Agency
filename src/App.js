
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelBooking from './components/HotelBooking';
import UserAuth from './components/UserAuth';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div>
        <h1>Travel Agency Site</h1>
        <Routes>
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/auth" element={<UserAuth />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
