import React from "react";

const Card = ({
  products,
}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      {products.map((product) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={product.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
