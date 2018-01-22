import React from 'react';
import Otsikko from './otsikko'
import Sisalto from './sisalto'

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko nimi={kurssi.nimi} />
      <Sisalto kurssi={kurssi} />
      
    </div>
  )
}

export default Kurssi