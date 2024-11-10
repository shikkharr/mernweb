import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const libraries = ['places'];
const mapContainerStyle = { width: '100%', height: '400px' };
const center = { lat: 40.7128, lng: -74.0060 }; // Default center location

function BookingPage() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBibB-SBgs7pYvV7jvgEtFxvG9Lka1II5w', // Replace with your API key
    libraries,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([
    { time: '9:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '3:00 PM', available: false },
    { time: '5:00 PM', available: true },
  ]);


  const handlePlaceSelect = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('autocomplete')
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setSelectedPlace({
          name: place.name,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  };

  const handleBooking = (slot) => {
    alert(`Booking confirmed for ${selectedPlace?.name} at ${slot.time}`);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <h1>Book a Parking Spot</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          id="autocomplete"
          type="text"
          placeholder="Where to go?"
          onFocus={handlePlaceSelect}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
      </div>
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
      />
      
      <div style={{ marginTop: '20px' }}>
        <h2>Available Time Slots</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Availability</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {availableSlots.map((slot, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{slot.time}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {slot.available ? 'Available' : 'Unavailable'}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {slot.available ? (
                    <button onClick={() => handleBooking(slot)}>Book</button>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      
      {selectedPlace && (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
      zoom={15}
    >
      <h3>{selectedPlace.name}</h3>
    </GoogleMap>
  )}
    </div>
  );
}

export default BookingPage;
