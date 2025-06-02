import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { useLocation } from 'react-router-dom';
import billboardIMG from '../assets/Vimage.png';
import About from './about';
import Footer from './footer';

export default function BillboardDetail() {
  const location = useLocation();
  const billboardDetails = location.state?.bbDetails ;

  

  return (
    <div className='container-fluid p-5'>
        <div className="container d-flex align-items-center justify-content-center">
          <img src={billboardIMG} alt="billboard image" />
        </div>
        <div className="container d-flex justify-content-center align-items-center" >
          <div>
            <h1> {billboardDetails.name} </h1>
            <h1> {billboardDetails.description} </h1>
            <h1> {billboardDetails.address} </h1>
            <h1> {billboardDetails.type.toUpperCase()} BILLBOARD </h1>
            <h1> {billboardDetails.size} </h1>
          </div>
        </div>
    </div>
  );
}
