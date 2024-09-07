import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);


              // CREATED ON SIMULTANEOUS SEARCH
              // const filteredRestaurant=resList.filter(
              //   (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              //   setFilteredRestaurant(filteredRestaurant)
              //   if(e.target.value===""){
              //     setFilteredRestaurant(resList)
              //   }
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant=resList.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurant(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filteredResList = resList.filter(
              (res) => res.info.avgRating > 4.3);
            setResList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
