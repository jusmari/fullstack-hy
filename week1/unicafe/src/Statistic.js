import React from 'react';

const Statistic = props => {
  return(
    <p>{props.text}: {props.value}</p>
  )
}

export default Statistic