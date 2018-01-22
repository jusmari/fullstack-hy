import React from 'react'
import Osa from './osa'

const Sisalto = ({kurssi}) => {
  const osat = kurssi.osat.map((osa) => {
    return (
      <Osa
        key={osa.id}
        aihe={osa}
      />
    )
  })

  const yht = kurssi.osat.reduce((yht, osa) => {
    return yht + osa.tehtavia
  }, 0)

  return(
    <div>
      {osat}
      <p>yhteensä {yht} tehtävää</p>
    </div>
  )
}

export default Sisalto