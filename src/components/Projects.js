
import data from '../projects.json'
import Project from './Project'


const Projects = () => {

    const myProjects = data.map((project) =>
        <Project name={project.name} img={project.img} url={project.url} git={project.git} > </Project>
    )

    return (
        <>
            <h1 className='title'>Projects</h1>
            <div className="description">
                {myProjects}
            </div>
        </>
    )
}

export default Projects;