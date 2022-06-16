import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import ProjectInfo from './components/ProjectInfo';
import Model from './components/Model'
import './App.css'
import About from './components/About';
import Project from './components/Project';
import Closet from './components/Closet';
import Resume from './components/Resume';

// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

export default function App() {

  const [hatState, setHatState] = useState({ isOpen: false, current: "red-hat" })
  const [topState, setTopState] = useState({ isOpen: false, current: "jacket" })
  const [bottomState, setBottomState] = useState({ isOpen: false, current: "pants" })
  const [closet, setCloset] = useState(false);
  const [currentGrid, setCurrentGrid] = useState(0);


  const toggleCloset = () => {
    setCloset(!closet)

  }
  const toggleHat = () => {
    setHatState({ ...hatState, isOpen: !hatState.isOpen })

  }
  const changeHat = (event) => {
    setHatState({ ...hatState, current: event.currentTarget.value })
    console.log(typeof (event.currentTarget.value))
  }

  const toggleTop = () => {
    setTopState({ ...topState, isOpen: !topState.isOpen })

  }
  const changeTop = (event) => {
    setTopState({ ...topState, current: event.currentTarget.value })
  }

  const toggleBottom = () => {
    setBottomState({ ...bottomState, isOpen: !bottomState.isOpen })

  }
  const changeBottom = (event) => {
    setBottomState({ ...bottomState, current: event.currentTarget.value })
  }

  const resize = (event) => {
    if (+event.currentTarget.id === currentGrid) {
      setCurrentGrid(0)

    } else {
      setCurrentGrid(+event.currentTarget.id)
    }
  }

  return (
    <div className="App" >
      <div className='inner-grid'>
        <div onClick={resize} style={{ 'background-color': 'rgb(100,140,98)' }} className='grid-item' id={0}>
          <About />

        </div>

        <div className='grid-item-model' id={4}>
          {<div>
            <button className="closet-toggle" onClick={toggleCloset}>DRESS ME</button>

            <Closet hatState={hatState} toggleHat={toggleHat} changeHat={changeHat}
              topState={topState} toggleTop={toggleTop} changeTop={changeTop}
              bottomState={bottomState} toggleBottom={toggleBottom} changeBottom={changeBottom} closet={closet} />
          
            <Canvas>
              <ambientLight intensity={0.4} />
              <directionalLight />
              {/* <OrbitControls enableZoom={false}/> */}
              <Suspense fallback={null}>
                <Model hatState={hatState} topState={topState} bottomState={bottomState} scale={1.2} position={[0, -6, 0]} />
              </Suspense>
            </Canvas>
            
          </div>}
        </div>
      </div>

      <div id="grid" className='second-grid'>

        <a href='#2' onClick={currentGrid === 2 ? 'none' : resize} className={currentGrid === 2 ? 'expand-left' : 'grid-item'} id={2}>
          {currentGrid === 2 ? <>
            <Project href='#1' name="Shopify Feed" img="" />
            <ProjectInfo style={{ "padding": "0" }} url="https://shopifyfeed.herokuapp.com/"
              name="Shopify Feed"
              img1="/images/feed1.png"
              stack="React, MongoDb, NodeJs"
              description="Web App that allows you to create a product feed from you're favorite shopify shops." /></> :
            <>
              <div className='title-card-video'>
                <p className='card-type' >WEB APP</p>
                <p className='card-name'> Shopify Feed</p>
              </div>
              {/* <video className="video-loop" autoPlay muted loop playsinline defaultMuted preload="auto" oncontextmenu="return false;" >
                <source src="./images/feed-vid.mp4" type="video/mp4" />
              </video> */}
              <img className ="video-loop" src="./images/feed.gif"/>
            </>
          }
        </a>

        <a href='#3' onClick={currentGrid === 3 ? 'none' : resize} className={currentGrid === 3 ? 'expand-left' : 'grid-item'} id={3}>
          {currentGrid === 3 ? <>
            <Project name="Booking" img="" />
            <ProjectInfo style={{ "padding": "0" }} url="https://chopchopbarbershop.herokuapp.com/"
              name="Booking App"
              img1="./images/chop0.png"
              stack="React, MongoDb, NodeJs"
              description="Web App for creating appointments." /></> :

            <Project name="Booking App" />
          }
        </a>
        <a href='#1' onClick={currentGrid === 1 ? 'none' : resize} className={currentGrid === 1 ? 'expand-left' : 'grid-item'} id={1}>
          {currentGrid === 1 ? <Resume /> : <h2 style={{ "fontSize": "40px" }}>Resume</h2>}</a>

      </div>
      {/* <p className='foot'>© 2021 Hamzey Beauferris. All Rights Reserved.</p> */}

    </div>


  )
}

