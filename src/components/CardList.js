import Card from "./Card";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Card.scss";
import { gsap } from "gsap/index";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";

let data = [
  {
    id: 1,
    src: "",
    // buttonTitle: "Track Pack",
    img1: "",
    img2: "",
    url: "",
    type: "Mobile App",
    stack: ["Flutter", "Firebase"],
    title: "Track Pack",
    p2: "",
    p3: "",
  },
  {
    id: 2,
    src: "",
    buttonTitle: "Visit Site",
    img1: "",
    img2: "",
    url: "",
    type: "Web Design",
    stack: ["Wordpress"],
    title: "DB Driving School",
    p1: "",
    p2: "",
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

  CustomEase.create("apple", ".62,.61,.45,1");

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
