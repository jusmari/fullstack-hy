import React from 'react';
import Statistic from './Statistic'

const Statistics = props => {
  const yht = props.hyva + props.huono + props.neutraali
  const ka = (props.hyva - props.huono) / yht
  const pos = props.hyva / yht

  return (
    <React.Fragment>
      <h1>Statistiikka</h1>

      <div>
        <Statistic text="hyvä" value={props.hyva} />
        <Statistic text="neutraali" value={props.neutraali} />
        <Statistic text="huono" value={props.huono} />

        {yht !== 0 &&
          <React.Fragment>
            <Statistic text="keskiarvo" value={ka} /> 
            <Statistic text="positiivisia" value={pos} />
          </React.Fragment>
        }

        {yht === 0 &&
          <p>ei arvoteltu vielä</p>
        }

      </div>
    </React.Fragment>

  )
}

export default Statistics