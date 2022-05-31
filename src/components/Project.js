import './Project.css'

const Project = (props) => {
    return (
        <div  className='card'>
           
                <div className='title-card'>
                    <p className='card-type' >WEB APP</p>
                    <p className='card-name'> {props.name}</p>
                </div>
                <img className='thumbnail' src={props.img} alt='' />          
        </div>
    )
}

export default Project