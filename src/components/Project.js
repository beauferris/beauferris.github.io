import './Project.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Project = (props) => {
    return (
        <div className='card'>
            <img className='thumbnail' src={props.img}></img>
            <a href={props.git} rel="noreferrer" target="_blank" className='git-button'> 
                <img src='./images/github.svg' alt="github icon"></img>
            </a>
            <a href={props.url} rel="noreferrer" target="_blank" className='view-button'>
            <img src='./images/arrow.svg' alt="github icon"></img>
            </a>
           
        </div>
    )
}

export default Project