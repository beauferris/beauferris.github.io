
import data from '../projects.json'
import Project from './Project'


const Projects = () => {

    const myProjects = data.map((project) =>
        <Project name={project.name} img={project.img} url={project.url} git={project.git} > </Project>
    )

    return (
        <>
            <h1 className='title'>PROJECTS</h1>
            <div className="projects">
                {myProjects}
            </div>
        </>
    )
}

export default Projects;