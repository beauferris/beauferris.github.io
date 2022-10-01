
import './Model.css';
import CardList from './CardList';
const Homepage = () => {


    return (
        <div className='homepage'>
            <header className='header'>
                <h1>HAMZEY</h1>
                <div>
                    <a target="blank" href='https://www.linkedin.com/in/beauferris/'><img alt="" src="/images/linkedin.svg"></img></a>
                    <a target="blank" href='https://github.com/beauferris'><img alt="" src="/images/github.svg"></img></a>
                </div>
            </header>
            <div >
                <div className='flip-grid'  >
                  <CardList/>
                </div>
            </div>
        </div>

    )
}


export default Homepage; 