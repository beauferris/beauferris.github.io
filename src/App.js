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
        <div onClick={resize} className={currentGrid === 0 ? 'expand-left' : 'grid-item'} id={0}>
          {currentGrid === 0 ? <About /> :
            <p style={{ "fontWeight": "bold", "fontSize": "30px", "marginTop": "45px" }}>About</p>}
        </div>
        <div id="resume" onClick={currentGrid === 1 ? 'none' : resize} className={currentGrid === 1 ? 'expand-left' : 'grid-item'} id={1}>
          {currentGrid === 1 ? <Resume /> : <p style={{ "fontWeight": "bold", "fontSize": "30px", "marginTop": "45px" }}>Resume</p>}</div>

        <div onClick={currentGrid === 2 ? 'none' : resize} className={currentGrid === 2 ? 'expand-left' : 'grid-item'} id={2}>
          {currentGrid === 2 ? <>
            <Project name="Shopify Feed" img="" />
            <ProjectInfo style={{ "padding": "0" }} url="https://shopifyfeed.herokuapp.com/"
               name="Shopify Feed" 
               img1="/images/homepage.png" 
               img2="/images/search.png"
               img3="/images/favs.png"
               stack="React, MongoDb, NodeJs" 
               description="Web App that allows you to create a product feed from you're favorite shopify shops" /></> :
            <Project name="Shopify Feed" img="" />}
        </div>

        <div onClick={currentGrid === 3 ? 'none' : resize} className={currentGrid === 3 ? 'expand-left' : 'grid-item'} id={3}>
          {currentGrid === 3 ? <>
            <Project name="Booking App" img="" />
            <ProjectInfo style={{ "padding": "0" }} url="https://chopchopbarbershop.herokuapp.com/" 
              name="Booking App" 
              img1="/images/chop1.png"
              img2= "/images/chop2.png"
              img3= "/images/chop3.png"
              stack="React, MongoDb, NodeJs" 
              description="Web App for creating appointments" /></> :
            <Project name="Booking App" img="" />}
        </div>


        <div className={currentGrid === 4 ? 'expand-model' : 'grid-item-model'} id={4}>
          {<div className='model'>
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
      {/* <p className='foot'>© 2021 Hamzey Beauferris. All Rights Reserved.</p> */}

    </div>


  )
}

