import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="rounded-l p-2 m-auto w-8/12 bg-slate-100 shadow-xl border border-black my-3">
        <div className="flex justify-between cursor-pointer" 
        onClick={handleClick}>
          <span className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>^</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
