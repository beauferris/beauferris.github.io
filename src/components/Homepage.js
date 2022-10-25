import "./Model.css";
import CardList from "./CardList";

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h2>Hamzey</h2>
        <div>
          <a target="blank" href="https://www.linkedin.com/in/beauferris/">
            <img alt="" src="/images/linkedin.svg"></img>
          </a>
          <a target="blank" href="https://github.com/beauferris">
            <img alt="" src="/images/github.svg"></img>
          </a>
        </div>
      </header>
      <div className="intro">
        <h1>Frontend Developer</h1>
        <h3>
          Based in Canada <span>&#127464;&#127462;</span>
        </h3>
      </div>
      <CardList />
      <div className="spacer"></div>
      <div className="foot">© 2022 Hamzey Beauferris. All Rights Reserved.</div>
    </div>
  );
};

export default Homepage;
