import "./Closet.css";
import Model from './Model';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useState } from "react";

const Closet = ({ closet, toggleCloset, expand, topState, hatState, bottomState, position, changeBottom, changeHat, changeTop, zoomBottom, zoomHead, zoomTop }) => {





  return (

    <>
      < Canvas style={{ "backgroundColor": "rgb(248,236,238)" }}>
        <ambientLight intensity={0.4} />
        <directionalLight />
        {/* {toggle?  <OrbitControls enableZoom={false}></OrbitControls>: null } */}
        <Suspense fallback={null}>
          <Model hatState={hatState} topState={topState} bottomState={bottomState} scale={1.1} position={position} />
        </Suspense>
      </Canvas >

      {expand ?


        <div className={closet === false ? "closet-hide" : "closet"}>

          <div className="closet-header"> <h2>CLOSET</h2> <button className='cancel' onClick={toggleCloset}>x</button></div>
          
          <div className='closet-buttons'>
            <button  onClick={zoomHead}> HEAD </button>
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

        : ""}
    </>

  )
}

export default Closet;