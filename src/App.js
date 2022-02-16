import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from "@react-three/drei";
import ProjectInfo from './components/ProjectInfo';
import Model from './components/Model'
import './App.css'
import About from './components/About';

import Projects from './components/Projects';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



export default function App() {

  const [hatState, setHatState] = useState({ isOpen: false, current: "red-hat" })
  const [topState, setTopState] = useState({ isOpen: false, current: "jacket" })
  const [bottomState, setBottomState] = useState({ isOpen: false, current: "pants" })


  const closeCloset = () =>{
 
  }

  return (
    <div className="App" >
      <div onClick={closeCloset}>

      
      <Router>
        <div className='info'>
          <div className='project-container'>
            <Link className='link' to='/'>hamzey</Link><br></br>
            <Link className='link' to='/Projects' >projects</Link>
          </div>

          <div className="social-media">
            <a href='https://github.com/' exact target="_blank" rel="noreferrer" className='link'>
              <img style={{ height: '50px' }} src='/images/github.svg' alt=''></img> </a>
          </div>
        </div>


      <div className='items'>
      <div className='closet'>
        
          <div className='closet-buttons'>
            <button onClick={() => { setHatState({ ...hatState, isOpen: !hatState.isOpen }) }}><img src={`./images/${hatState.current}.png`} />  </button>
            <div className='closet-buttons' >
          
              <button className={hatState.isOpen ? "" : 'hide'} onClick={() => setHatState({ ...hatState, current: "black-hat" })}><img src='./images/black-hat.png' /></button>
              <button className={hatState.isOpen ? "" : 'hide'} onClick={() => setHatState({ ...hatState, current: "red-hat" })}><img src='./images/red-hat.png' /></button><br />
            </div>
        
          </div>
          <div className='closet-buttons'>
            <button onClick={() => { setTopState({ ...topState, isOpen: !topState.isOpen }) }}><img src={`./images/${topState.current}.png`} />  </button>
            <div className='closet-buttons' >
              <button className={topState.isOpen ? "" : 'hide'} onClick={() => setTopState({ ...topState, current: "jacket" })}><img src='./images/jacket.png' /></button><br />
              <button className={topState.isOpen ? "" : 'hide'} onClick={() => setTopState({ ...topState, current: "shirt" })}><img src='./images/shirt.png' /></button>
            </div>
          </div>

          <div className='closet-buttons'>
            <button onClick={() => { setBottomState({ ...bottomState, isOpen: !bottomState.isOpen }) }}><img src={`./images/${bottomState.current}.png`} />  </button>
            <div className='closet-buttons' >
              <button className={bottomState.isOpen ? "" : 'hide'} onClick={() => setBottomState({ ...bottomState, current: "pants" })}><img src='./images/pants.png' /></button><br />
              <button className={bottomState.isOpen ? "" : 'hide'} onClick={() => setBottomState({ ...bottomState, current: "shorts" })}><img src='./images/shorts.png' /></button>
            </div>
          </div>
        </div>

     
        <Canvas className="model"  >
          <ambientLight intensity={0.4} />
          <directionalLight />
          <Suspense fallback={null}>
            <Model hatState={hatState} topState={topState} bottomState={bottomState} scale={1.2} position={[0, -6, 0]} />
          </Suspense>
        </Canvas>

       
        </div>


        <Routes>
          <Route path='/' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/:id'
            element={<ProjectInfo />} />
        </Routes>
      </Router>

      <p className='foot'>© 2021 Hamzey Beauferris. All Rights Reserved.</p>
    </div>
    </div>
  )
}

