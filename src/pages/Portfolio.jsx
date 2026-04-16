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
import SC1 from "../pictures/SC1.png"
import SC2 from "../pictures/SC2.png"
import SC5 from "../pictures/SC5.png"
import SC6 from "../pictures/SC6.png"
import SC7 from "../pictures/SC7.png"
import SC10 from "../pictures/SC10.png"
import SC11 from "../pictures/SC11.png"
import SC12 from "../pictures/SC12.png"
import SC13 from "../pictures/SC13.png"
import TREEHOSUE from "../pictures/TREEHOUSE.jpg"




import "../Css/Portfolio.css"

const Portfolio = () => {
  const projects = [

    {
      id: 0,
      title: "SPORTS COMLPEX",
      cover: SC1,
      images: [SC1,SC2,SC5,SC6,SC7,SC10,SC11,SC12,SC13],
      description: "This is a project description",
    },
    {
      id: 1,
      title: "ARCHITECTURAL DESIGNING AND DETAILING",
      cover: ADD1,
      images: [ADD1,ADD2,ADD3,ADD4,ADD5,ADD6,ADD7],
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quidem sequi praesentium aut harum tempore a commodi dicta cupiditate, unde vitae beatae, perspiciatis repudiandae repellendus",
    },
    {
       id: 2,
      title: "Tropical Modernism",
      cover: TM1,
      images: [TM1, TM2, TM3, TM4, TM5],
      description: "This is a project description",
    },
    {
      id:3,
      title: "Treehosue",
      cover:TREEHOSUE,
      images: [TREEHOSUE],
      description: "This is a project description",

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