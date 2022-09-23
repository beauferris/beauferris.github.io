import './Card.css';

const Card = (props) => {

    return (
        <div className='card-holder'>

            <div className='card-header' >
                <div>
                    <h4>{props.type}</h4>
                    <h1>{props.title}</h1>
                </div>
                <button className='cancel' onClick={props.onClick} style={{ display: props.display }}>x</button>

            </div>
            {
                props.myModel ? <div className='model' style={{ display: 'block' }}>{props.myModel} </div> : ""
            }


            {props.id === 0 ? "" : <div className='img-container'>
                <img className='card-img' alt='' src={props.src}></img>
            </div>
            }


            <div style={{ display: props.display }}>
                <article className='live-site'  >
                    <h4>{props.arrow}</h4>
                    <a className='arrow-text' href={props.id === 0 ? props.closet : props.url} onClick={props.id === 0 ? props.closet : null} target="blank"  >
                        <img className='arrow' src="/images/arrow.svg" alt=""></img>
                    </a>
                </article>
            </div>

            <div className="main-text" style={{ display: props.display }}>

                <article className='card-p1'>
                    <h3>Project</h3>
                    <p>{props.p1}</p>
                    <p>{props.p2} </p>

                </article>

                <div className='imgs'>

                    <img className="screenshot" src={props.img1}></img>
                    <img className="screenshot" src={props.img2}></img>

                </div>

                <article className='stack-wrapper' >

                    <h3>
                        Stack
                    </h3>
                    <div className='stack'>


                        {props.stack.map((stack, index) => {
                            return (<p key={index}>{stack}</p>)
                        })}
                    </div>

                </article>

            </div>
        </div >
    )

}

export default Card;