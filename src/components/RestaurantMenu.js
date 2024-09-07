import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu= () => {

    const{resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer/>;

    const {text} = resInfo?.cards[0]?.card?.card

    const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return(
        <div className="m-4 text-center">
            <h1 className=" font-bold text-2xl pb-8">{text}</h1>
        {categories.map((category)=> (
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>)
            
        )}
        
        </div>
    )
};

export default RestaurantMenu;