import { useState } from 'react';
import './Card.scss';

const Card = (props) => {

    let styleObject = {
        transform: 'translate(0px,0px)'
    }

    const [style, setStyle] = useState(styleObject);
    const [current, setCurrent] = useState(false);

    const expand = (event) => {
        setCurrent(prev => !prev);
        let viewportOffset = event.target.getBoundingClientRect();

        if (current === true) {

            setStyle({ transform: 'translate(0px,0px)' });

            let scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY) * -1);
        } else {

            document.body.style.top = '-' + window.scrollY + 'px';
            document.body.style.position = 'fixed';

            setStyle({ transform: 'translate(' + viewportOffset.left * -1 + 'px,' + viewportOffset.top * -1 + 'px)' })

        }


    }

    return (
        <div className='card-wrapper' >
            <div className={current === true ? 'card open' : 'card'}
                onClick={current === true ? null : expand} style={style}>
                
                {current===true?<button className='cancel' onClick={expand} style={{ display: props.display }}>x</button>:null}
               
                {
                    props.myModel ? <div className='model' style={{ display: 'block' }}>{props.myModel} </div> : ""
                }

                <div className='card-top'>
                    {props.id === 0 ? "" :
                        <div className='img' style={{ 'backgroundImage': `url(${props.img})` }} alt='' ></div>
                    }

                </div>

                <div className='card-header' >
                    <div>
                        <h4>{props.type}</h4>
                        <h1>{props.title}</h1>
                    </div>


                </div>


                <article className='live-site'  >
                    <h4>{props.arrow}</h4>
                    <a className='arrow-text' href={props.id === 0 ? props.closet : props.url} onClick={props.id === 0 ? props.closet : null} target="blank"  >
                        <img className='arrow' src="/images/arrow.svg" alt=""></img>
                    </a>
                </article>



                <div className="description" >
                    <article >
                        <h3>Project</h3>
                        <p>{props.p1}</p>
                        <p>{props.p2} </p>
                    </article>
                </div>

            </div >
        </div>
    )

}

export default Card;