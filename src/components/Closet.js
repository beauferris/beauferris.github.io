import "./Closet.css";

const Closet = ({hatState, topState, bottomState, toggleHat, toggleTop, toggleBottom, changeHat,changeTop, changeBottom, closet}) =>{
    return(

        <div className={closet === false? "closet-hide" : "closet"}>
                
        <div className='closet-buttons'>
          <button onClick={toggleHat}><img src={`./images/${hatState.current}.png`} alt="hat button" />  </button>
          <div className='closet-buttons' >
            <button className={hatState.isOpen ? "" : 'hide'} value="black-hat" onClick={changeHat}><img src='./images/black-hat.png' alt="black hat"/></button>
            <button className={hatState.isOpen ? "" : 'hide'} value="red-hat" onClick={changeHat}><img src='./images/red-hat.png' alt="red hat" /></button><br />
          </div>
        </div>

        <div className='closet-buttons'>
          <button onClick={toggleTop}><img src={`./images/${topState.current}.png`}  alt="top button"/>  </button>
          <div className='closet-buttons' >
            <button className={topState.isOpen ? "" : 'hide'} value="jacket"onClick={changeTop}><img src='./images/jacket.png' alt="jacket"/></button><br />
            <button className={topState.isOpen ? "" : 'hide'} value = "shirt" onClick={changeTop}><img src='./images/shirt.png' alt="shirt" /></button>
          </div>
        </div>

        <div className='closet-buttons'>
          <button onClick={toggleBottom}><img src={`./images/${bottomState.current}.png`} alt="bottom button"/>  </button>
          <div className='closet-buttons' >
            <button className={bottomState.isOpen ? "" : 'hide'} value="pants" onClick={changeBottom}><img src='./images/pants.png' alt="pants"/></button><br />
            <button className={bottomState.isOpen ? "" : 'hide'} value="shorts" onClick={changeBottom}><img src='./images/shorts.png' alt="shorts"/></button>
          </div>
        </div>
      </div>
    )
}

export default Closet;