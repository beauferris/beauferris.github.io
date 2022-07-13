import './Project.css'

const Project = (props) => {
    return (
        <div  className='card'>
           
                <div className='title-card'>
                    <p className='card-type' ></p>
                    <p className='card-name'> {props.name}</p>
                </div>
                <img className='thumbnail' src={props.img} alt='' />          
        </div>
    )
}

export default Project