/* eslint-disable react/prop-types */
import "./Card.scss";
import Banner from "./UI/Banner";
const Card = ({
  className,
  onClick,
  model,
  id,
  img,
  title,
  stack,
  img1,
  img2,

  buttonTitle,
  p1,
  p2,
  p3,
  url,
}) => {
  return (
    <div className="card-wrapper">
      <div
        className={className}
        onClick={className === "card open" ? null : () => onClick(id)}
      >
        {className === "card open" ? (
          <button className="cancel" onClick={() => onClick(id)}>
            x
          </button>
        ) : null}

        <div className="card-top">
          {id === 0 ? (
            <div className="model" style={{ display: "block" }}>
              {model}{" "}
            </div>
          ) : (
            <div
              className="img"
              style={{ backgroundImage: `url(${img})` }}
              alt=""
            >
              <Banner title={title} url={url} button={buttonTitle} />
            </div>
          )}
        </div>
        <div className="content-wrapper">
          <div className="main-content">
            <div className="description">
              <h2>Idea</h2>
              <article>
                <p>{p1}</p>
                <h2></h2>
                <p>{p2} </p>
              </article>
            </div>

            <div className="imgs">
              <img className="img" src={img1} alt="screenshot"></img>
              <img className="img" src={img2} alt="screenshot"></img>
            </div>
            <article className="description">
              <p>{p3}</p>
            </article>
            <div className="stack-wrapper">
              {stack.map((stack, index) => {
                return (
                  <p className="stack" key={index}>
                    {stack}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
