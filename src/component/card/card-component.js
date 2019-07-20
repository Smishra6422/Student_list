import React from 'react';
import './card-style.css'

export const Card = props =>{


  return (
    <div className="card-container">

    <img className="image-size" alt="students" src={`${props.student.image}`} />

      <h2>{ props.student.name }</h2>
      <p>{ props.student.email}</p>
      </div>
  );
}
