/* eslint-disable react/prop-types */
const Banner = ({ title, url, button }) => {
  return (
    <div className="card-header">
      <div>
        <h2>{title}</h2>
      </div>
      <a className="closet-toggle-button" href={url} target="blank">
        {button} &#8594;
      </a>
    </div>
  );
};

export default Banner;
