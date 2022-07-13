import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'

import ProjectInfo from './components/ProjectInfo';
import Model from './components/Model'
import './App.css'
import About from './components/About';
import Closet from './components/Closet';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


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
      <main className='main-container'>
        <header>
          <h1>HAMZEY</h1>
          <div>


            <a href="https://www.linkedin.com/in/hamzey-beauferris-4bb5b3b7/" target="_blank" rel="noreferrer" >
              <img src="/images/linkedin.svg" alt="linked in link" />
            </a>
            <a href="https://github.com/beauferris/" target="_blank" rel="noreferrer" >
              <img src="./images/github.svg" alt="github link"></img>
            </a>
          </div>
        </header>

        <div className='inner-grid'>

          <button id="grid0" className='anchor'></button>
          <a href='#grid0' onClick={resize} className={'grid-item'} style={{ 'background-color': 'rgb(100,140,98)' }} id={8} >
            <About />
          </a>

          <a href="#grid1" className='grid-item-model' >
            <button id="grid1" className='anchor'></button>
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
          </a>
        </div>

        <ScrollAnimation
          animateIn="animate__slideInUp"
          animateOut="animate__slideOutDown"


        >
          <div id="grid" className='second-grid'>

            <button id="grid2" className='anchor'></button>
            <a href='#grid2' onClick={currentGrid === 2 ? 'none' : resize} className={currentGrid === 2 ? 'expand-left' : 'grid-item'} id={2}>

              {currentGrid === 2 ? <>

                <ProjectInfo style={{ "padding": "0" }} url="https://shopifyfeed.herokuapp.com/"
                  name="Shopify Feed"
                  img1="./images/feed1.png"
                  stack="React, MongoDb, NodeJs"
                  description="Personal app I created for myself to manage all the shopify shops I like to visit in one place. Uses Shopify's JSON API and checks for new products for 30+ shops. Creates a feed with a responsive masonry layout that has infinite scroll/pagination. " /></> :
                <>
                  <div className='title-card-video'>
                    <p className='card-name'> SHOPIFY FEED</p>
                  </div>
                  <img className="video-loop" src="./images/feed.gif" alt="shopify feed" />
                </>
              }

            </a>

            <ScrollAnimation
              animateIn="animate__slideInUp"
              animateOut="animate__slideOutDown"
              delay={.5}
            >

              <div href='#grid3' onClick={currentGrid === 3 ? 'none' : resize} className={currentGrid === 3 ? 'expand-left' : 'grid-item'} id={3}>
                <button id="grid3" className='anchor'></button>
                {currentGrid === 3 ? <>

                  <ProjectInfo style={{ "padding": "0" }} url="https://chopchopbarbershop.herokuapp.com/"
                    name="Booking App"
                    img1="./images/chop0.png"
                    stack="React, MongoDb, NodeJs"
                    description="Web App for creating appointments." /></> :
                  <>

                    <div className='title-card-video'>
                      <p className='card-name'> BOOKING APP</p>
                    </div>
                    <img className="video-loop" src="./images/chop0.png" alt="booking app" />
                  </>
                }
              </div>

            </ScrollAnimation>

            {/* <a id="grid4" className='anchor'></a>
        <a href='#grid4' onClick={currentGrid === 1 ? 'none' : resize} className={currentGrid === 1 ? 'expand-left' : 'grid-item'} id="1">
          {currentGrid === 1 ? <Resume /> : <h2 style={{ "fontSize": "40px" }}>RESUME</h2>
          }</a> */}

          </div>
        </ScrollAnimation>
      </main>

      <footer>
        <p className='foot'>© 2022 Hamzey Beauferris. All Rights Reserved.</p>
      </footer>


    </div>


  )
}

