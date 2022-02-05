import './Project.css'

const Project = (props) => {
    return (
        <div className='card'>

            <div className='title-card'>
                <p className='card-type' >WEB APP</p>
                <p className='card-name'> {props.name}</p>
            </div>

            <img className='thumbnail' src={props.img} alt=''></img>

            {/* <a href={props.git} rel="noreferrer" target="_blank" className='git-button'>
                <img src='./images/github.svg' alt="github icon"></img>
            </a>
            <a href={props.url} rel="noreferrer" target="_blank" className='view-button'>
                <img src='./images/arrow.svg' alt="github icon"></img>
            </a> */}
        </div>
    )
}

export default Project