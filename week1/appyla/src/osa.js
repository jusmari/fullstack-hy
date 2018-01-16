import React, { Component } from 'react';

const Osa = props => {
  return (
    <p>{props.aihe.nimi} {props.aihe.tehtavia}</p>
  )
}

export default Osa