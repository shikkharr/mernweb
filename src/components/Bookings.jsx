import React from 'react';

function Bookings() {
  // Sample data for parking bookings
  const bookings = [
    { id: 1, parkingSpot: 'A1', time: '10:00 AM - 12:00 PM', status: 'Booked' },
    { id: 2, parkingSpot: 'B2', time: '1:00 PM - 3:00 PM', status: 'Available' },
    // Add more bookings as needed
  ];

  return (
    <div class="container text-center">
  <div class="row">
    <h1 className="display-6 fw-bolder my-4 py-4 text-center">Parking History </h1>
    <div class="col">
      Date
    </div>
    <div class="col">
      Vehicle No.
    </div>
    <div class="col">
      Vehicle Type
    </div>
    <div class="col">
      Booking Id
    </div>
    <div class="col">
      Booking Time
    </div>
    <div class="col">
      Status
    </div>
  </div>
</div>
  );
}

export default Bookings;
