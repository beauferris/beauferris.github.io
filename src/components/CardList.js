import Card from "./Card";
import Closet from "./Closet";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Card.scss";
import { gsap } from "gsap/index";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";

let data = [
  {
    id: 0,
    type: "3d",
    title: "Dress Me",
    stack: ["React", "Three.js", "Blender"],
    p1: `I have always been interested in art since I was a kid. As I got older I found it harder to find time to sketch. Once I learned about 3d modeling and blender I thought it would be the perfect way to get back into it.`,
    p2: "This project started with me trying to learn blender in my free time for fun. Once I found out about three.js I started thinking of ways to incorporate the two. Eventually I started  playing with changing his clothes and moving the camera around. I wanted to create an interactive avatar, similar to something you would see in a video game.",
    p3: "Im going to continue to use this project to improve my 3d modeling/three.js skills. In the future I would like to add more clothing options and add animations to the model and camera.",
    img1: "./images/closet/model.png",
    img2: "./images/closet/model1.png",
    img3: "./images/closet/model2.png",
    img4: "./images/closet/model3.png",
  },

  {
    id: 1,
    src: "/images/feed.gif",
    buttonTitle: "LIVE",
    img1: "./images/feed1.png",
    img2: "./images/feed2.png",
    url: "https://shopifyfeed.herokuapp.com/",
    type: "Web App",
    stack: ["React", "Material UI", "MongoDb", "Node"],
    title: "Shopify Feed",
    p1: "After graduating university I was spending alot of time doing projects to learn new frameworks/technologies. I was getting frustrated making generic apps that I would never actually use. I wanted to apply my skills to something that would make my life easier, thats when I got the idea for this app.",
    p2: "I found myself spending alot of time browsing online shops for their new arrivals. I wanted to have a single instagram-like feed instead that would combined all these new arrivals together.",
    p3: "I ended up using Shopify's JSON api to get product data from shops I frequent. It checks for new items every couple of minutes and adds them to a database. Then uses this data to create a feed with a responsive masonry layout that has infinite scroll/pagination. You can also login using auth0 and customize you're own feed with the shops i've added.",
  },
];

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

  CustomEase.create("apple", ".62,.61,.45,1.15");

  useEffect(() => {
    toggle === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [toggle]);

  //update layout whenever our layout state changes
  useLayoutEffect(() => {
    if (!layoutState) return;

    const flip = Flip.from(layoutState, {
      duration: 0.5,

      ease: "apple",
      absolute: true,

      toggleClass: "activeCard",
      targets: q(".card"),
      // scale: true,
    });

    return () => {
      flip.kill();
    };
  }, [layoutState, q]);

  const expand = (id) => {
    setCurrent(current === -1 ? id : -1);
    setToggle(!toggle);
    setLayoutState(Flip.getState(q(".card")));
  };

  const cardData = data.map((data) => {
    return (
      <Card
        id={data.id}
        className={data.id === current ? "card open" : "card"}
        data-flip-id={data.id}
        key={data.id}
        stack={data.stack}
        title={data.title}
        buttonTitle={data.buttonTitle}
        url={data.url}
        src={data.src}
        type={data.type}
        img={data.src}
        p1={data.p1}
        p2={data.p2}
        p3={data.p3}
        img1={data.img1}
        img2={data.img2}
        img3={data.img3}
        img4={data.img4}
        onClick={expand}
        model={data.id === 0 ? <Closet /> : ""}
      ></Card>
    );
  });

  return (
    <div ref={boxRef} className="card-list">
      {cardData}
    </div>
  );
};

export default CardList;
