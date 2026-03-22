import example from "../pictures/example.jpg";
import "../Css/Portfolio.css"

const PortfolioCards = ({index, project, onImageClick,onTextClick}) => {
  return (
    <>
        <div className='project'>
            <div className='imageArea' onClick={()=>onImageClick(index)}>
                <img src={project.cover} alt={project.title}  />
                
            </div>

         <div className='textArea' onClick={()=>onTextClick(index)}> 
             <div className='upperText'> 
                 <h1>{project.title}</h1>
             </div>
            <div className='lowerText'> <h2>{project.description}</h2> </div>
            </div>
    </div>
    </>
  )
}

export default PortfolioCards