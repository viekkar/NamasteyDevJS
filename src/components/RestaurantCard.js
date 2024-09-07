import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const{resData}=props;

    const{name,cuisines,avgRating}=resData?.info;


    return(    
    <div className="hover:shadow-2xl m-2 p-2 w-[250px] h-[450px] bg-slate-200 hover:bg-slate-300 rounded-lg">
        <img className="rounded-lg h-[275px]" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}></img>
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>

    </div>
    )

};

export default RestaurantCard;