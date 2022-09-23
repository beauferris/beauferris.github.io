
import { useEffect, useState } from 'react'
import "animate.css/animate.min.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import Card from './Card';


import './Model.css';
import Closet from './Closet';
import { OrbitControls } from '@react-three/drei';


let myData = [
    { id: 0, type: "3d", title: "DRESS ME", url: "CLOSET", arrow: "CLOSET", stack: ["React", "Three.js", "Blender",], 
    p1: `This project started with me trying to learn blender in my free time for fun. Once I found out about three.js I started looking for ways to incorporate the two. Eventually I started  playing with changing his clothes and moving the camera around. I wanted to create an interactive avatar, 
    similar to something you would see in a video game.`, p2:"In the future I would like to add more clothing options and add animations when the camera moves.",
     img1: "./images/closet/closet1.png", img2:"./images/closet/model.png"  },
   
     { id: 1, src: "/images/feed.gif", arrow: "LIVE SITE", img1:"./images/feed1.png", img2:"./images/feed2.png", url: "https://shopifyfeed.herokuapp.com/", type: "Web App", stack: ["React", "Material UI", "MongoDb", "Node.js"], title: "SHOPIFY FEED",
      p1: "The idea behind this app was that I found myself spending alot of time checking shops for their new arrivals. I wanted to have one feed instead that would combined all these new arrivals together."
    ,p2:" I ended up using Shopify's JSON api to get data from the shops I wanted. It checks for new items every couple of minutes and adds them to a database. Then uses this data to create a feed with a responsive masonry layout that has infinite scroll/pagination. You can also login using auth0 and customize you're own feed with the shops i've added."},
    // { id: 2, src: "https://placehold.co/300x300", url: "https://chopchopbarbershop.herokuapp.com/", type: "Web App", stack: ["React", "MongoDb", "Node.js"], title: "BOOKING APP", p1: "Web App for creating appointments",  },
]

const Homepage = () => {

    //Card states
    const [toggle, setToggle] = useState(false);
    const [layoutState, setLayoutState] = useState();
    const [current, setCurrent] = useState(1);

    gsap.registerPlugin(Flip);

    //REF TO THE DOM ELEMENT WE WANT TO GROW
    const boxRef = useRef();
    const details = useRef();

    //Gets all the children of our element
    const q = gsap.utils.selector(boxRef);

    //closet state
    const [hatState, setHatState] = useState({ isOpen: false, current: "red-hat" })
    const [topState, setTopState] = useState({ isOpen: false, current: "jacket" })
    const [bottomState, setBottomState] = useState({ isOpen: false, current: "pants" })
    const [position, setPosition] = useState([0, -5, 0])

    const [closet, setCloset] = useState(false);

    const reposition = () =>{
        setPosition([0, -5, 0]);
        setBottomState({ ...bottomState, isOpen: false });
        setTopState({ ...topState, isOpen: false });
        setHatState({ ...hatState, isOpen: false });
       
    }

    const zoomHead = () => {
        setPosition([0.5, -6.5, 2]);
        setHatState({ ...hatState, isOpen: !hatState.isOpen });

        setBottomState({ ...bottomState, isOpen: false });
        setTopState({ ...topState, isOpen: false });
    }

    const zoomTop = () => {
        setPosition([0.5, -5, 2.5]);
        setTopState({ ...topState, isOpen: !topState.isOpen })

        setBottomState({ ...bottomState, isOpen: false });
        setHatState({ ...hatState, isOpen: false });
    }

    const zoomBottom = () => {
        setPosition([0.5, -4, 2.5]);
        setBottomState({ ...bottomState, isOpen: !bottomState.isOpen })
        setHatState({ ...hatState, isOpen: false });
        setTopState({ ...topState, isOpen: false });
    }

    const changeHat = (event) => {
        setHatState({ ...hatState, current: event.currentTarget.value })
    }

    const changeTop = (event) => {
        setTopState({ ...topState, current: event.currentTarget.value })
    }

    const changeBottom = (event) => {
        setBottomState({ ...bottomState, current: event.currentTarget.value })
    }

    const toggleCloset = () => {
        setCloset(!closet);
       
        reposition(); 
    
       
    }


    useEffect(() => {
        toggle === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
    }, [toggle])

    //update layout whenever our layout state changes
    useLayoutEffect(() => {

        if (!layoutState) return;

        const flip = Flip.from(layoutState, {
            duration: 0.3,
            targets: q(".card, .zoom")
        });

        return () => {
            flip.kill();
        };

    }, [layoutState]);

    const expandCard = (event, id) => {
        setCurrent(id);
        setToggle(!toggle);
        // if (closet) setCloset(false);
        setLayoutState(Flip.getState(q(".card")));
        reposition();
        setCloset(false);
    };


    const cardData = myData.map(data => {
        return (

            <div
                className="card"
                key={data.id}
                data-flip-id={data.id}
                onClick={(event) => expandCard(event, data.id)}
            >
                <Card display={"none"}
                    arrow={myData[current].arrow}
                    stack={data.stack}
                    id={data.id}
                    title={data.title}
                    url={data.url}
                    src={data.src}
                    type={data.type}
                    img={data.src}
                    p1={data.p1}
                    p2={data.p2}
                    
                    img1={data.img1}
                    img2={data.img2}
                    myModel={data.id === 0 ? <Closet
                        hatState={hatState}
                        topState={topState}
                        bottomState={bottomState}
                        position={position}
                        closet={closet} toggleCloset={toggleCloset} expand={false} /> : ""}
                >

                </Card>
            </div>
        )


    })


    return (
        <div className='homepage'>
            <header className='header'>
                <h1>HAMZEY</h1>
                <div>
                    <a target="blank" href='https://www.linkedin.com/in/beauferris/'><img alt="" src="/images/linkedin.svg"></img></a>
                    <a target="blank" href='https://github.com/beauferris'><img alt="" src="/images/github.svg"></img></a>
                </div>
            </header>
            <div ref={boxRef}>
                <div className='flip-grid'  >

                    {cardData}



                    <div className='container'>
                        {toggle ? <div className='card zoom'
                            ref={details}
                            key={myData[current].id}
                            data-flip-id={myData[current].id}
                        >


                            <Card display={"grid"}
                                arrow={myData[current].arrow}
                                stack={myData[current].stack}
                                id={myData[current].id}
                                onClick={(event) => expandCard(event, myData[current].id)}
                                title={myData[current].title}
                                src={myData[current].src}
                                url={myData[current].url}
                                type={myData[current].type}
                                img={myData[current].src}
                                p1={myData[current].p1}
                                p2={myData[current].p2}
                                img1={myData[current].img1}
                                img2={myData[current].img2}
                                myModel={myData[current].id === 0 ? <Closet
                                    hatState={hatState}
                                    topState={topState}
                                    bottomState={bottomState}
                                    position={position}
                                    zoomBottom={zoomBottom}
                                    zoomHead={zoomHead}
                                    zoomTop={zoomTop}
                                    changeTop={changeTop}
                                    changeBottom={changeBottom}
                                    changeHat={changeHat}
                                    closet={closet}
                                   
                                    toggleCloset={toggleCloset} expand={true} /> : ""}
                                closet={toggleCloset}
                            >

                            </Card>

                        </div> : ""}
                    </div>
                </div>
            </div>
        </div>


    )
}


export default Homepage; 