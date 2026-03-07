import React from 'react'
import "../Css/Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section>
       <img className ="bgimg" src="memoji.webp" alt="" />
      <div className='introContent'>
        <span className='hello'>Hello.</span><br />
         <span className='introtext'>I am 
         <span className='name'> Kundan</span> <br />
         a Spatial Designer </span>  
         <p className='intropara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate enim, voluptatem obcaecati iusto quasi sunt.
         </p>
         <div className='bothbuttons'>
      <Link to ="/portfolio" > 
        <button className='mycreationsbutton'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" 
                 d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 
                 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
      My Creations
        </button>
           </Link>
        <button className='Contactus'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="Menuimg"> 
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364 .466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 
        1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741 c0-1.602-1.123-2.995-2.707-3.228 A48.394 48.394 0 0 0 12 3 c-2.392 0-4.744.175-7.043.513 C3.373 3.746 2.25 5.14 2.25 6.741 v6.018Z" /> 
        </svg> Contact Me </button>
   
</div>
      </div>
     
    </section>
  )
}

export default Home