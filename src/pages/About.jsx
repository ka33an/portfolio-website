import React from 'react'
import "../Css/About.css"
import Skillcard from '../components/Skillcard.jsx'
import autocad from "../logos/autocad_logo.png"
import sketchup from "../logos/sketchup_logo.png"
import revit from "../logos/revit_logo.png"
import rhino from "../logos/rhino_logo.png"
import d5 from "../logos/d5_logo.png"
import lumion from "../logos/lumion_logo.png"
import twinmotion from "../logos/twinmotion_logo.png"

const About = () => {

    const data=[{name:"Autocad",logo:autocad,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  }, {name:"Sketchup",logo:sketchup,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  },{name:"Revit",logo:revit,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  },{name:"Rhino",logo:rhino,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  },{name:"D5",logo:d5,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  },{name:"Twinmotion",logo:twinmotion,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  },{name:"Lumion",logo:lumion,
    text:"Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus."
  }]
  return (
   <>
   <section className='AboutMe'>
    <div className='AboutImg'>
      <img src="AboutmeImg.png" alt="" />
    </div>
    <div className='AboutText'>
      <h2 className='AboutHeading'>ABOUT ME</h2>
      <p className='AboutPara'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptatem aliquid eveniet. Animi blanditiis, quidem, possimus reprehenderit molestiae perferendis, officiis dolorem doloremque molestias excepturi beatae amet facilis a eveniet atque cum voluptas corporis sit labore temporibus libero. Illo, saepe! Enim sit ipsum facere possimus tempora sapiente, aspernatur dicta voluptatum architecto?
      </p>
    </div>
   </section>
   <section className='Skills'>
    <h1>WHAT I WORK WITH</h1>
    <div className='caraousel'>
      <div className='group'>
          <Skillcard data={data}/>
          <Skillcard data={data}/>


      </div>
   
    </div>  
   </section>
   </>
  )
}

export default About