import { MdPriceCheck } from "react-icons/md";
import { Link } from "react-router-dom";

import React from "react";

function ProductsList({ products }) {
  return (
    <ul className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        products.products.map((product) => {
          return (
            <li
              key={product.id}
              className="card card-compact  bg-base-100 shadow-xl"
            >
              <figure className="border-b-2 border-orange-300">
                <img
                  src={product.thumbnail}
                  alt="Shoes"
                  className="w-full h-52 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="line-clamp-3">{product.description}</p>
                <div className="card-actions justify-between items-center">
                  <p className="text-2xl flex gap-1 items-center">
                    {product.price} $ <MdPriceCheck></MdPriceCheck>
                  </p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    Buy Now
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductsList;
