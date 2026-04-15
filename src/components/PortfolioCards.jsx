import { useState } from "react"

const PortfolioCards = ({ index, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="portfolioPage">
    <div className='project'>
      <div className='imageArea'>
        <img src={project.images[currentIndex]} alt={project.title} />
        <button className="arrowBtn left" onClick={goPrev}> 
         
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 24 24" 
  strokeWidth="1.5" 
  stroke="currentColor" 
  className="size-6"
>
  <path 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    d="M15.75 19.5 8.25 12l7.5-7.5" 
  />
</svg>


        </button>
        <button className="arrowBtn right" onClick={goNext}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </button>
        <span className="slideCount">
          {currentIndex + 1} / {project.images.length}
        </span>
      </div>

      <div className='textArea'>
        <div className='upperText'>
          <h1>{project.title}</h1>
        </div>
        <div className='lowerText'>
          <h2>{project.description}</h2>
        </div>
      </div>
    </div>
     </div>
  )
}

export default PortfolioCards