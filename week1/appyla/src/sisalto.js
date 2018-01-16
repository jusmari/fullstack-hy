import React from 'react'
import Osa from './osa'

const Sisalto = props => {

  return(
    <div>
      <Osa aihe={props.osat[0]}/>
      <Osa aihe={props.osat[1]}/>
      <Osa aihe={props.osat[2]}/>
    </div>
  )
}

export default Sisalto