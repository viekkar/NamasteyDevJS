import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu= () => {

    const{resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return <Shimmer/>;

    const {text} = resInfo?.cards[0]?.card?.card

    const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="m-10">
            <h1 className="font-bold text-2xl pb-8">{text}</h1>
            <h2 className="font-bold text-lg pb-5">Menu</h2>
            <ul className="">
                {itemCards.map((item) => (
                    <li className="p-6 rounded-l pb-10 border my-4 shadow-xl hover:border-slate-300 cursor-pointer" key={item.card.info.id}>{item.card.info.name} -{"Rs:"}
                     {(item.card.info.price)/100||(item.card.info.defaultPrice)/100}</li>))}
            </ul>
        </div>
    )
};

export default RestaurantMenu;