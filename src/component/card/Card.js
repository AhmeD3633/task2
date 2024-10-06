import React from "react";
import Button from "../button/Button";

const Card = ({ products }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      {products.map((product) => (
        <div className="card bg-base-100 w-96 shadow-xl h-[450px]">
          <figure>
            <img src={product.image} className="w-full h-[60%] object-contain" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>

            <p className="break-all">
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  <Button title={"Description"}/>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-500 leading-tight">{product.description}</p>
                </div>
              </div>
            </p>

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
