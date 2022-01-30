import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Model from './components/Model'
import './App.css'
import About from './components/About';

import Projects from './components/Projects';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <div className="App">


      <Canvas className="model">
        <ambientLight intensity={0.2} />
        <directionalLight />
        <Suspense fallback={null}>
          <Model scale={1} position={[0, -3, 0]} />
        </Suspense>
      </Canvas>
      <Router>

        <div className='projects'>
          <div className='project-container'>
            <Link className='link' to='/'>hamzey</Link><br></br>
            <Link className='link' to='/Projects'>projects</Link>
          </div>
        </div>

        <div className="social-media">
          <a href='https://github.com/' exact target="_blank" rel="noreferrer" className='link'>
            <img style={{ height: '50px' }} src='./images/github.svg' alt=''></img> </a>
        </div>


        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/projects' element={<Projects />} />
        </Routes>

      </Router>
      {/* <p>© 2021 Hamzey Beauferris. All Rights Reserved.</p> */}
    </div>
  )
}

