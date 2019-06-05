import React from 'react'
import Card from './Card'

const CardContainer = () => {
    const vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
      const mappedVacationSpots = vacationSpots.map((card)=> {
        return <Card card={card} />
      })

      return (
        <div>
          {mappedVacationSpots}
        </div>
      )
}

export default CardContainer