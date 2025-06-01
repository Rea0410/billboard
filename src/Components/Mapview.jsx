
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Optional: custom icon
const billboardIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const MapView = () => {
  const billboardLocations = [
    { lat: 34.7304, lng: -86.5861, city: 'Huntsville, AL' },
    { lat: 35.0456, lng: -85.3097, city: 'Chattanooga, TN' },
    { lat: 38.8951, lng: -77.0364, city: 'Washington, DC' },
  ];

  return (
    <div style={{ height: '500px', width: '100%', margin: '40px 0' }}>
      <MapContainer center={[35.0456, -85.3097]} zoom={6} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {billboardLocations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]} icon={billboardIcon}>
            <Popup>{loc.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
