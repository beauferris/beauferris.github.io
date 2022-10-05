import "./Closet.css";
import Model from './Model';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useState } from "react";

const Closet = () => {

  //closet state
  const [hatState, setHatState] = useState({ isOpen: false, current: "red-hat" })
  const [topState, setTopState] = useState({ isOpen: false, current: "jacket" })
  const [bottomState, setBottomState] = useState({ isOpen: false, current: "pants" })
  const [position, setPosition] = useState([0, -5, 0])

  const [closet, setCloset] = useState(false);

  const reposition = () => {
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

  return (

    <>
      < Canvas >
        <ambientLight intensity={0.4} />
        <directionalLight />
        {/* {toggle?  <OrbitControls enableZoom={false}></OrbitControls>: null } */}
        <Suspense fallback={null}>
          <Model hatState={hatState} topState={topState} bottomState={bottomState} scale={1.1} position={position} />
        
        </Suspense>
      
      </Canvas >

      <button className='closet-toggle-button' onClick={toggleCloset}>CLOSET
        
        </button>
     


      <div className={closet === false ? "closet-hide" : "closet"}>

        <div className="closet-header"> <h2>CLOSET</h2> <button className='cancel' onClick={toggleCloset}>x</button></div>

        <div className='closet-buttons'>
          <button onClick={zoomHead}> HEAD </button>
          <button className={hatState.isOpen ? "" : 'hide'} value="black-hat" onClick={changeHat}><img src='./images/closet/black-hat.png' alt="black hat" /></button>
          <button className={hatState.isOpen ? "" : 'hide'} value="red-hat" onClick={changeHat}><img src='./images/closet/red-hat.png' alt="red hat" /></button>
        </div>

        <div className='closet-buttons'>
          <button onClick={zoomTop}>TOP</button>
          <button className={topState.isOpen ? "" : 'hide'} value="jacket" onClick={changeTop}><img src='./images/closet/jacket.png' alt="jacket" /></button>
          <button className={topState.isOpen ? "" : 'hide'} value="shirt" onClick={changeTop}><img src='./images/closet/shirt.png' alt="shirt" /></button>
        </div>

        <div className='closet-buttons'>
          <button onClick={zoomBottom}>BOTTOM  </button>
          <button className={bottomState.isOpen ? "" : 'hide'} value="pants" onClick={changeBottom}><img src='./images/closet/pants.png' alt="pants" /></button>
          <button className={bottomState.isOpen ? "" : 'hide'} value="shorts" onClick={changeBottom}><img src='./images/closet/shorts.png' alt="shorts" /></button>
        </div>
      </div>

    </>

  )
}

export default Closet;