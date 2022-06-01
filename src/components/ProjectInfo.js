// import { Link, useParams } from "react-router-dom";
// import data from '../projects.json'

import "./ProjectInfo.css";

const ProjectInfo = (props) => {
    const project =
        <div className="project-info">
            <div className="project-text">
                <p style={{ fontSize: "30px", margin: "0px", padding: "10px" }}>{props.description}</p>
                <ul>
                    <li> <span className="category">SITE</span><a href={props.url} target='_blank' rel="noreferrer"> {props.url}</a></li>
                    <li> <span className="category">STACK</span><span target='_blank'> {props.stack}</span></li>
                </ul>
            </div>

            <div className="imgs">
                <img src={props.img1} alt="application screenshot" />
                <img src={props.img2} alt="application screenshot" />
                <img src={props.img3} alt="application screenshot" />
            </div>
            
        </div>
    return (
        <>
            {project}
        </>
    )
}

export default ProjectInfo;