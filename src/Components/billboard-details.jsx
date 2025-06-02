import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import billboardIMG from '../assets/Vimage.png';
import locationSample from '../assets/location-tempo.jpg';

export default function BillboardDetail() {
  const location = useLocation();
  const billboardDetails = location.state?.bbDetails ;

  

  return (
    <div className='container-fluid p-5'>
        <div className="container d-flex align-items-center justify-content-center">
          <img src={billboardIMG} alt="billboard image"  className='w-100'/>
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
          <h1 className="fw-bold p-2" style={{fontSize: '3rem'}}> {billboardDetails.address} </h1>
        </div>
        <div className="container d-flex p-2" >
          <div className="row">
            {/* left side */}
            <div className="col-sm-7">
                <h3> <strong>Location</strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.address}</span> 
                </h3>
                <h3> <strong>Coordinates</strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.lat} , {billboardDetails.lng} </span> 
                </h3>
                <h3> <strong>Market</strong>: 
                  <span style={{fontSize: '1.7rem'}}> Alabama </span> 
                </h3>
                <br/>
                <h3> <strong>Type </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.type.toUpperCase()} BILLBOARD </span> 
                </h3>
                <br />
                <h3> <strong>Dimensions </strong>: 
                  <span style={{fontSize: '1.7rem'}}> {billboardDetails.size.toUpperCase()}</span> 
                </h3>
                <br />
                <h3>
                  <span style={{fontSize: '1.7rem'}}> Call for Availability </span> 
                </h3>

            </div>

            {/* right side */}
            <div className="col-sm-5">
                <img src={locationSample} alt="sample location" className='w-100'/>
            </div>
          </div>
        </div>
    </div>
  );
}
