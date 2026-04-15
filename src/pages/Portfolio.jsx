import React, { useState } from 'react'
import PortfolioCards from '../components/PortfolioCards'
import TM1 from "../pictures/TM1.jpeg"
import TM2 from "../pictures/TM2.jpeg"
import TM3 from "../pictures/TM3.jpeg"
import TM4 from "../pictures/TM4.jpeg"
import TM5 from "../pictures/TM5.jpeg"
import ADD1 from "../pictures/ADD1.png"
import ADD2 from "../pictures/ADD2.png"
import ADD3 from "../pictures/ADD3.png"
import ADD4 from "../pictures/ADD4.png"
import ADD5 from "../pictures/ADD5.png"
import ADD6 from "../pictures/ADD6.png"
import ADD7 from "../pictures/ADD7.png"



import "../Css/Portfolio.css"

const Portfolio = () => {
  const projects = [
    {
      id: 0,
      title: "Tropical Modernism",
      cover: TM1,
      images: [TM1, TM2, TM3, TM4, TM5],
      description: "This is a project description",
    },
    {
      id: 1,
      title: "ARCHITECTURAL DESIGNING AND DETAILING",
      cover: ADD1,
      images: [ADD1,ADD2,ADD3,ADD4,ADD5,ADD6,ADD7],
      description: "Another project",
    }
  ]

  return (
    <>
      {projects.map((project, index) => (
        <PortfolioCards
          key={project.id}
          index={index}
          project={project}
        />
      ))}
    </>
  )
}

export default Portfolio