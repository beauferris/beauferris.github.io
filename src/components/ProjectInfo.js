import { Link, useParams } from "react-router-dom";
import data from '../projects.json'

const ProjectInfo = () => {
    const { id } = useParams();

    const project = data.filter(project => project.name === id).map(project => {
        return (
            <div className="project-info">



                <h1><Link to="/projects">Projects</Link>->{project.name}</h1>

                <div className="project-text">

                    <p style={{fontSize:"30px"}}>{project.description}</p>

                    <ul>
                        <li> <span className="category">SITE</span><a href={project.url} target='_blank'> {project.url}</a></li>
                        <li> <span className="category">STACK</span><span target='_blank'> {project.stack}</span></li>
                    </ul>
                </div>

                <img src={`images/${project.name}.png`} />
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