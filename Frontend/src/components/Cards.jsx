import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="my-4 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
          <figure>
            <img
              src={item.image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white  cursor-pointer">${item.price}</div>
              <div className="px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white  cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
