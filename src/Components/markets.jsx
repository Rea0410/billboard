import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mobil from '../assets/mobil.png';
import { useNavigate } from 'react-router-dom';
import billboardtempo from '../assets/Vimage.png';
import billboardGlass from '../assets/billboard-glass.jpg';
import billboardOutdoor from '../assets/billboard-outdoor.jpg';
import billboardHill from '../assets/billboard-hill.jpg';

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

  // const billboardLocations = [
  //   {
  //     lat: 34.7304,
  //     lng: -86.5861,
  //     city: 'Huntsville, AL',
  //     address: '123 Main St, Huntsville, AL',
  //     image: 'https://via.placeholder.com/150?text=Huntsville',
  //   },
  //   {
  //     lat: 35.0456,
  //     lng: -85.3097,
  //     city: 'Chattanooga, TN',
  //     address: '456 River Rd, Chattanooga, TN',
  //     image: 'https://via.placeholder.com/150?text=Chattanooga',
  //   },
  //   {
  //     lat: 38.8951,
  //     lng: -77.0364,
  //     city: 'Washington, DC',
  //     address: '789 Capitol Ave, Washington, DC',
  //     image: 'https://via.placeholder.com/150?text=DC',
  //   },
  // ];

  const [positions, setPositions] = useState([, 
    {
      id: 1,
      name: 'B1',
      description: 'description',
      lat: 32.566336, 
      lang: -86.676552,
      address: 'H88F+G9P Joffre, Alabama, USA',
      size: '10x40',
      type: 'outdoor',
      imageL: billboardtempo,
      imageR: billboardOutdoor
    },
    {
      id: 2,
      name: 'B2',
      description: 'description',
      lat: 32.143310, 
      lang: -86.626482,
      address: '49VF+8CC Gordonville, Alabama, USA',
      size: '10x30',
      type: 'outdoor',
      imageL: billboardHill,
      imageR: billboardHill
    }, 
    {
      id: 3,
      name: 'B3',
      description: 'description',
      lat: 32.532267, 
      lang: -86.332121,
      address: 'GMJ9+W52 Coosada, Alabama, USA',
      size: '10x20',
      type: 'outdoor',
      imageL: billboardGlass,
      imageR: billboardGlass,
    },
     {
      id: 4,
      name: 'B4',
      description: 'description',
      lat: 32.278852, 
      lang: -85.988347,
      address: '72H6+GMR Pike Rd, Alabama, USA',
      size: '10x50',
      type: 'outdoor',
      imageL: billboardHill,
      imageR: billboardOutdoor
    },
     {
      id: 5,
      name: 'B5',
      description: 'description',
      lat: 32.622951, 
      lang:-86.227313,
      address: 'JQFF+53M Holtville, Alabama, USA',
      size: '10x30',
      type: 'outdoor',
      imageL: billboardHill,
      imageR: billboardOutdoor
    },
  ]);


  // const [bbDetail, setBBDetails] = useState([]);

  let bbDetails = [{}];
  const navigate = useNavigate();

  function popUpClickHandler({id, read}){

    const billboardId = id;

    
      if(read === "left"){
          positions.map(boards => {
            if(boards.id === billboardId){
              bbDetails ={
                id: boards.id,
                name: boards.name,
                description: boards.description,
                lat: boards.lat,
                lng: boards.lang,
                type: boards.type,
                address: boards.address,
                size: boards.size,
                read: 'LHR',
                facing: 'North',
                image: boards.imageL
              };
            }
          });

        }else{
          positions.map(boards => {
            if(boards.id === billboardId){
              bbDetails ={
                id: boards.id,
                name: boards.name,
                description: boards.description,
                lat: boards.lat,
                lng: boards.lang,
                type: boards.type,
                address: boards.address,
                size: boards.size,
                read: 'RHR',
                facing: 'South',
                image: boards.imageR
              };
            }

          });
        }



    navigate('/location-detail', {state: { bbDetails }});
    
  }

  return (
    <section style={{ padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
      <div style={{ height: '500px', width: '100%', margin: '40px 0' }}>
          
        <MapContainer center={[ 32.361861, -86.229658 ]} zoom={9} style={{ height: '500px', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


          {positions.map((boards) => (
            <Marker
              key={boards.id}
              position= {[ boards.lat, boards.lang ]}
              // position={position}
              // draggable={true}
              // eventHandlers={{
              //   dragend(e) {
              //     const { lat, lng } = e.target.getLatLng();
              //     setPosition([lat, lng]);
              //     console.log("New coordinates:", lat, lng);
              //   }
              // }}

            >
              <Popup>
                <div>
                  {/* <img src={billboardtempo} width='100%' height='100' /> 
                  <h4 className='pt-2 fw-bold'>{ boards.name }</h4>
                  <p> { boards.adddress } </p>
                  <p> { boards.size } {boards.type}</p> */}
                  <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12 text-center">
                          <h4 className='pt-2 fw-bold mb-5'>{ boards.address }</h4>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-6">
                              <img src={boards.imageL} width='100%' height='100' onClick={(e) => { e.preventDefault(); popUpClickHandler({ id:boards.id, read:"left"}); }} style={{cursor: 'pointer'}}/>
                              <div className="fw-bold h5 pt-5 m-0">{boards.name}A - LHR</div> 
                              <div className='pt-1'><strong>Facing: </strong> North</div>
                              <div className='pt-0'><strong>Read: </strong> Right Hand</div>
                              <div className='pt-0'>{boards.type} ( {boards.size} )</div>
                          </div>
                          <div className="col-sm-6">
                              <img src={boards.imageR} width='100%' height='100' onClick={(e) => { e.preventDefault(); popUpClickHandler({ id:boards.id, read:"right"}); }} style={{cursor: 'pointer'}}/>
                              <div className="fw-bold h5 pt-5 m-0">{boards.name}B - RHR</div> 
                              <div className='pt-1'><strong>Facing: </strong> South</div>
                              <div className='pt-0'><strong>Read: </strong> Left Hand</div>
                              <div className='pt-0'>{boards.type} ( {boards.size} )</div>
                          </div>
                      </div>
                  </div>
                </div>
              </Popup>
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
