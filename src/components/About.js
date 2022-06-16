import './About.css'

const About = () => {
    return (
        <div className='about'>
            <a href="https://github.com/beauferris/" target="_blank" rel="noreferrer" >
                <img src="./images/github.svg" alt="github link"></img>
            </a>
            <a href="https://www.linkedin.com/in/hamzey-beauferris-4bb5b3b7/" target="_blank" rel="noreferrer" >
                <img src="./images/linkedin.svg" alt="linked in link"></img>
            </a>
            <h1> HAMZEY BEAUFERRIS</h1>
            {/* <p> Front-end developer based in Canada &#x1F1E8;&#x1F1E6;. Graduated from the University of Calgary with a B.Sc in Computer Science in 2020.
                Interested in design and all things UI/UX.
            </p> */}
            {/* <p>Bio</p>
            <p>1994 </p>
            <p>2019 </p>
            <p>2020 to present</p> */}
        </div>
    )
}

export default About
