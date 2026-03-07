import React from 'react'
import "../Css/Skillcard.css"

const Skillcard = ({data}) => {

  return (
    <div className="Container">
      {data.map((d)=>(
        <div className="card" key={d.name}>
       <div className='top'>

            <img src={d.logo} alt={d.name} />
        
      
            <h3>{d.name}</h3>
       </div>
            <p className='cardText'>{d.text}</p>
        
        </div>
      ))}

    </div>
  )
}

export default Skillcard