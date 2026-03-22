import React, { useState } from 'react'
import PortfolioCards from '../components/PortfolioCards'
import TM1 from "../pictures/TM1.jpeg"
import TM2 from "../pictures/TM2.jpeg"
import TM3 from "../pictures/TM3.jpeg"
import TM4 from "../pictures/TM4.jpeg"
import TM5 from "../pictures/TM5.jpeg"
import example from "../pictures/example.jpg";

import "../Css/Portfolio.css"

const Portfolio = () => {
  const projects=[{
    id:0,
    title:"Tropical Modernism",
    cover: TM1,
    images: [TM1, TM2, TM3,TM4,TM5],
    description: "This is a project description",
  },
   {
    id: 1,
    title: "ARCHITECTURAL DESIGNING AND DETAILING",
    cover: example,
    images: [example, example],
    description: "Another project",
  
  }

]
  const [activeIndex,setActiveIndex]= useState(null)
  const [panelType,setPanelType]=useState(null)
  

  const handleImageClick =(index)=>{
    setActiveIndex(index)
    setPanelType("gallery")
  };

  const handleTextClick=(index)=>{
    setActiveIndex(index)
    setPanelType("text")
  };
  const currentProject = activeIndex !== null ? projects[activeIndex] : null;
  return (<>

  {projects.map((project,index) => (
  <PortfolioCards
    key={project.id}
    index={index}
    project={project}
    onImageClick={handleImageClick}
    onTextClick={handleTextClick}
  />
))}
      {activeIndex!== null &&(
         
        <div className="overlay" >
          <button className="closeButton" onClick={() => {
        setActiveIndex(null);
        setPanelType(null);
       }}>
          Close
        </button>
        <div className="panel"> 
       
        {panelType == "gallery" && (
          <div className='gallery'>
            {currentProject.images.map((img, i) => (
            <img key={img} src={img} alt="project" />
             ))}
         </div>
        )}
        {panelType=="text" &&(
          <div>
            <h1>{currentProject.title}</h1>
            <p>{currentProject.description}</p>
          </div>
        )}
        </div>
    </div>
      )}
      
    
  </>
    
  )
}

export default Portfolio