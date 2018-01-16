import React from 'react';

const Yht = props => {
  let yht = 0
  props.osat.forEach(osa => {
    yht += osa.tehtavia
  });

  return (
    <p>yhteensä {yht} tehtävää</p>
  )
 
} 

export default Yht