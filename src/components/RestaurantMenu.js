import { useEffect, useState } from "react";

const RestaurantMenu= () => {

    const[resInfo,setResInfo] = useState(null);


    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=746371");

        const json =await data.json();

        console.log(json)
        setResInfo(json.data);
    }



    return(
        <div className="menu">
            <h1>{resInfo?.cards[0]?.card.card?.text}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Kabutar</li>

            </ul>
        </div>
    )
};

export default RestaurantMenu;