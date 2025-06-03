import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import locationSample from '../assets/location-tempo.jpg';
import billboardHill from '../assets/billboard-hill.jpg';
import billboard1 from '../assets/b1-b2b.jpg';
import map1 from '../assets/map1.jpg';
import map2 from '../assets/map2.jpg';


export default function BillboardDetail() {
  const location = useLocation();
  const billboardDetails = location.state?.bbDetails ;

  

  return (
    <div className='container-fluid p-5'>
        <div className="container d-flex align-items-center justify-content-center">
          <img src={billboardDetails.image1} alt="billboard image"  className='w-100'/>
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
          <h1 className="fw-bold p-2" style={{fontSize: '3rem'}}> {billboardDetails.name}</h1>
        </div>
        <div className="container d-flex p-2" >
          <div className="row">
            {/* left side */}
            <div className="col-sm-7">
                <h3> <strong>Location</strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.address} </span> 
                </h3>
                <br />
                <h3> <strong>Type </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.type} </span> 
                </h3>
                <br />
                <h3> <strong>Size </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.size}</span> 
                </h3>
                <h3> <strong>Coordinates</strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.lat} , {billboardDetails.lng} </span> 
                </h3>
                <h3> <strong>Read </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.read}</span> 
                </h3>
                <br/>
                <h3> <strong>Facing </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.facing}</span> 
                </h3>
                <br />
                <h3> <strong>Price </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.price}</span> 
                </h3>
                <h3>
                  <span style={{fontSize: '1.7rem'}}> Call for Availability </span> 
                </h3>

            </div>

            {/* right side */}
            <div className="col-sm-5 d-flex justify-content-end">
                <img src={billboardDetails.image2} alt="sample location" className='w-100'/>
            </div>
          </div>
        </div>
    </div>
  );
}
