
import data from '../projects.json'
import Project from './Project'
import './Projects.css'


const Projects = () => {

    const myProjects = data.map((project) =>
        <Project name={project.name} img={project.img} url={project.url} git={project.git} > </Project>
    )

    return (
        <>
            <div className="description">
                {myProjects}
            </div>
        </>
    )
}

export default Projects;