import { useParams } from "react-router-dom";
import data from '../projects.json'

const ProjectInfo = () => {
    const { id } = useParams();

    const project = data.filter(project => project.name === id).map(project => {
        return (
            <div className="project-info">
                <div>

               
                <h1>{project.name}</h1>
                <span style={{"fontWeight": "bold", fontSize:"25px"}}>{project.description}</span>

                <ul>
                    <li> <span className="category">SITE</span><a href={project.url} target='_blank'> {project.url}</a></li>
                    <li> <span className="category">STACK</span><span target='_blank'> {project.stack}</span></li>
                </ul>
                </div>
                <img  src='/images/new-arrivals.png'/>
            </div>

        )
    })

    return (
        <>
            {project}
        </>
    )
}

export default ProjectInfo;