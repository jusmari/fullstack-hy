import React from 'react'

const Notification = ({text}) => {
  return(
    <div style={styles}>
      {text}
    </div>
  )
}

const styles = {
  width: '100wv',
  margin: '10px',
  padding: '10px',
  backgroundColor: 'red',
  textAlign: 'center'
}

export default Notification