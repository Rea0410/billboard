import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mobil from '../assets/mobil.png'

const BillboardMarkets = () => {
  const marketData = [
    {
      region: 'Alabama',
      cities: [
        'Auburn',
        'Decatur',
        'Hartselle',
        'Hazel Green',
        'Huntsville',
        'Madison',
        'Moulton',
        'Scottsboro',
      ],
    },
    {
      region: 'Tennessee',
      cities: ['Chattanooga', 'Tullahoma', 'Surrounding Areas'],
    },
    {
      region: 'Major U.S. Cities',
      cities: ['Washington, DC', 'San Francisco, CA', 'Philadelphia, PA', 'Baltimore, MD'],
    },
  ];

  const billboardIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

  const billboardLocations = [
    {
      lat: 34.7304,
      lng: -86.5861,
      city: 'Huntsville, AL',
      address: '123 Main St, Huntsville, AL',
      image: 'https://via.placeholder.com/150?text=Huntsville',
    },
    {
      lat: 35.0456,
      lng: -85.3097,
      city: 'Chattanooga, TN',
      address: '456 River Rd, Chattanooga, TN',
      image: 'https://via.placeholder.com/150?text=Chattanooga',
    },
    {
      lat: 38.8951,
      lng: -77.0364,
      city: 'Washington, DC',
      address: '789 Capitol Ave, Washington, DC',
      image: 'https://via.placeholder.com/150?text=DC',
    },
  ];

  return (
    <section style={{ padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
      <div style={{ height: '500px', width: '100%', margin: '40px 0' }}>
        <MapContainer
          center={[35.0456, -85.3097]}
          zoom={6}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          {billboardLocations.map((loc, idx) => (
  <Marker key={idx} position={[loc.lat, loc.lng]} icon={billboardIcon}>
    <Tooltip direction="top" offset={[0, -30]} opacity={1}>
      <div style={{ textAlign: 'center', maxWidth: '150px' }}>
        <strong>{loc.city}</strong>
        <br />
        <img
          src={loc.image}
          alt={loc.city}
          style={{ width: '100px', marginTop: '5px', borderRadius: '5px' }}
        />
        <br />
        <span style={{ fontSize: '0.8rem' }}>{loc.address}</span>
      </div>
    </Tooltip>
  </Marker>
))}

   
        </MapContainer>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Our Billboard Markets</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        {marketData.map((market, index) => (
          <div key={index} style={{ flex: '1 1 300px' }}>
            <h3>{market.region}</h3>
            <ul>
              {market.cities.map((city, i) => (
                <li key={i}>{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BillboardMarkets;
