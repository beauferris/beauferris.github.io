import CardList from "./CardList";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <img style={{ width: "300px" }} src="/images/logo.png"></img>

        {/* <header className="header">
          <div>
            <a target="blank" href="https://www.linkedin.com/in/beauferris/">
              <img
                style={{ width: "20px", marginRight: "5px" }}
                alt="linkedi icon"
                src="/images/linkedin.svg"
              ></img>
              Linkedin
            </a>
            <a target="blank" href="https://github.com/beauferris">
              <img
                style={{ width: "20px", marginRight: "5px" }}
                alt="github icon"
                src="/images/github.svg"
              ></img>
              Github
            </a>
          </div>
        </header> */}
      </div>
      <CardList />
      <div className="spacer"></div>
      <div className="foot">© 2022 Hamzey Beauferris. All Rights Reserved.</div>
    </div>
  );
};

export default Homepage;
