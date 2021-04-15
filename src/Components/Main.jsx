import React from 'react'
import '../Style/Main.scss'
import  {Calendar}  from './Calendar'


export const Main = () => {
  return (
    <div className="main" >
      <div className="main__contaier">
        <div className="main__title">
          CHOOSE THE DAY FOR THE MEETING
        </div>
        <div className="main__subtitle">
          We encourage you to book your appointment online.
          <p>This will save you time.</p>
        </div>
      </div>
      <div className="main__calendar">
        <Calendar />
      </div>
    </div>
  )
}


