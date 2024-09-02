import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(()=>{
  },[]);


  const fetchData =async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json= await data.json();

    console.log(json)

    setResList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return resList.length===0? (
    <Shimmer/>
  ) :(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            FliteredResList = resList.filter((res) => res.info.avgRating > 4.3);
            setResList(FliteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
