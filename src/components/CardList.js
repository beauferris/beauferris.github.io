
import Card from './Card';
import Closet from './Closet';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import './Card.scss';
import { gsap } from 'gsap/index'
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";

let data = [
    {
        id: 0, type: "3d", title: "DRESS ME", url: "CLOSET", arrow: "CLOSET", stack: ["React", "Three.js", "Blender",],
        p1: `This project started with me trying to learn blender in my free time for fun. Once I found out about three.js I started looking for ways to incorporate the two. Eventually I started  playing with changing his clothes and moving the camera around. I wanted to create an interactive avatar, 
    similar to something you would see in a video game.`, p2: "In the future I would like to add more clothing options and add animations when the camera moves.",
        img1: "./images/closet/model.png"
    },

    {
        id: 1, src: "/images/feed.gif", arrow: "LIVE SITE", img1: "./images/feed1.png", url: "https://shopifyfeed.herokuapp.com/", type: "Web App", stack: ["React", "Material UI", "MongoDb", "Node.js"], title: "SHOPIFY FEED",
        p1: "The idea behind this app was that I found myself spending alot of time checking shops for their new arrivals. I wanted to have one feed instead that would combined all these new arrivals together."
        , p2: " I ended up using Shopify's JSON api to get data from the shops I wanted. It checks for new items every couple of minutes and adds them to a database. Then uses this data to create a feed with a responsive masonry layout that has infinite scroll/pagination. You can also login using auth0 and customize you're own feed with the shops i've added."
    },

]

const CardList = () => {
    //Card states
    const [toggle, setToggle] = useState(false);
    const [layoutState, setLayoutState] = useState();
    const [current, setCurrent] = useState(-1);

    gsap.registerPlugin(Flip);
    gsap.registerPlugin(CustomEase);

    //REF TO THE DOM ELEMENT WE WANT TO GROW
    const boxRef = useRef();
    // const details = useRef();

    //Gets all the children of our element
    const q = gsap.utils.selector(boxRef);


    CustomEase.create("apple", "0.6, 0.2, 0.45, 1.3");

    useEffect(() => {
        toggle === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
    }, [toggle])

    //update layout whenever our layout state changes
    useLayoutEffect(() => {

        if (!layoutState) return;

        const flip = Flip.from(layoutState, {
            duration: 0.5,
            delay: 0.1,
            
            
            
            targets: q(".card")
        });

        return () => {
            flip.kill();
        };

    }, [layoutState, q]);

    const expand = (id) => {
        setCurrent(current === -1 ? id : -1);
        setToggle(!toggle);
        setLayoutState(Flip.getState(q(".card")));
    }

    const cardData = data.map(data => {
        return (
            <Card
                id={data.id}
                className={data.id === current ? "card open" : "card"}
                data-flip-id={data.id}
                key={data.id}
                arrow={data.arrow}
                stack={data.stack}
                title={data.title}
                url={data.url}
                src={data.src}
                type={data.type}
                img={data.src}
                p1={data.p1}
                p2={data.p2}
                img1={data.img1}
                onClick={expand}
                model={data.id === 0 ? <Closet
                /> : ""}
            >

            </Card>

        )
    })

    return (
        <div ref={boxRef} className='card-list'>
            {cardData}
           
        </div>
    )

}

export default CardList; 