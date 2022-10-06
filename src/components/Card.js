import './Card.scss';

const Card = ({ className, onClick, model, id, img, title, arrow, closet, stack, img1, p1, p2, url }) => {

    return (
        <div className='card-wrapper'  >
            <div className={className} onClick={className === 'card open' ? null : () => onClick(id)} >

                {className==="card open" ? <button className='cancel' onClick={() => onClick(id)} >x</button>
                : null}

                <div className='card-top'>
                    {
                        model ? <div className='model' style={{ display: 'block' }}>{model} </div> : ""
                    }

                    {id === 0 ? "" :
                        <div className='img' style={{ 'backgroundImage': `url(${img})` }} alt='' ></div>
                    }

                </div>

                <div className='card-header' >
                    <div>
                        <h2>{title}</h2>
                    </div>


                </div>

                {id === 0 ? "" :
                    <article className='live-site'  >
                        <h4>{arrow}</h4>
                        <a className='arrow-text' href={id === 0 ? closet : url} onClick={id === 0 ? closet : null} target="blank"  >
                            <img className='arrow' src="/images/arrow.svg" alt=""></img>
                        </a>
                    </article>
                }

                <div className="description" >
                    <article >
                        <h3>Project</h3>
                        <p>{p1}</p>
                        <p>{p2} </p>
                    </article>
                </div>


                <div className='imgs'>

                    <img className="img" src={img1} alt="screenshot"></img>

                </div>

                <article className='stack-div' >

                    <h3>
                        Stack
                    </h3>

                    <div className='stack-wrapper'>
                        {stack.map((stack, index) => {
                            return (<p className='stack' key={index}>{stack}</p>)
                        })}
                    </div>
                </article>
            </div >
        </div>
    )

}

export default Card;
