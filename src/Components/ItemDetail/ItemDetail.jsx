import React from 'react'
import { alignPropType } from 'react-bootstrap/esm/types';

function itemDetail({data}) {
  return (
    <div className="container">
    <div className="details">
        <img className="datail_image" src={data.imagen} alt=""/>
        <div className="content">
            <h1>{data.title}</h1>
            </div>
        </div>
    </div>
  
  );
}

export default itemDetail;