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
        <button className="arrowBtn left" onClick={goPrev}>&#8592;</button>
        <button className="arrowBtn right" onClick={goNext}>&#8594;</button>
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