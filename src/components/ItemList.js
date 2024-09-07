import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex"
        >
          <div>
            <div className="text-left py-2">
              <div>
                <span>{item?.card?.info?.name}</span>
                <span>- ₹ {item?.card?.info?.price / 100}</span>
              </div>
            </div>
            <p className="text-left text-xs">{item?.card?.info?.description}</p>
          </div>
          <img
            src={CDN_URL + item?.card?.info?.imageId}
            className="w-20 rounded-md"
          />
          <button className="p-1 bg-black text-white shadow-lg absolute right-52">
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
