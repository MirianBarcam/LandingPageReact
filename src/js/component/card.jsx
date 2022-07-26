import React from "react";
import imgCard from "../../img/img-card.jpg";
import "./../../styles/card.css";

const Card = (prop) => {
  const description = prop.description;
  return (
    <div className="card" style={{ width: "18rem" }} >
      <img src={imgCard} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {description}
        </p>
      </div>
      <div class="card-footer">
      <a href="#" className="btn btn-primary">
          Find Out More
      </a>
      </div>
    </div>
  );
};
export default Card;
