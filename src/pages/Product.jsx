import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";

import React from "react";

function Product() {
  const { id } = useParams();
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products/" + id);
  console.log(products);
  return (
    <>
      {products && (
        <div className="align-content">
          <h1 className="text-3xl mb-5">Product - {products.title}</h1>
          <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
            {products.images.map((image) => (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  className="rounded-box max-h-60 lg:max-h-96 h-full boject-contain"
                />
              </div>
            ))}
          </div>
          
        </div>
      )}
    </>
  );
}

export default Product;
