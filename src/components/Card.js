/* eslint-disable react/prop-types */
import "./Card.scss";

const Card = ({
  className,
  onClick,
  type,
  id,
  img,
  title,
  stack,
  img1,
  img2,
  // buttonTitle,
  p1,
  p2,
  p3,
  // url,
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
          <div
            className="img"
            style={{ backgroundImage: `url(${img})` }}
            alt=""
          >
            <h2>{title}</h2>

            </div>
            <h4>{type}</h4>
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
