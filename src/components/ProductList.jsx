import PropTypes from "prop-types";

const ProductList = ({ drinkList, setCartList }) => {
  const handleListClick = (targetItem) => {
    setCartList((prevList) => {
      const existItemIndex = prevList.findIndex(
        (item) => item.id === targetItem.id
      );
      if (existItemIndex !== -1) {
        const newList = [...prevList];
        if (newList[existItemIndex].qty < 10) {
          newList[existItemIndex].qty += 1;
        }
        return newList;
      }
      return [...prevList, { ...targetItem, qty: 1 }];
    });
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-2">品項</h2>
      <ul>
        {drinkList.map((item) => {
          return (
            <li
              key={item.id}
              role="list"
              className="p-2 md:p-4 flex justify-between items-center border-gray-400 border-b border-x border-1 first:rounded-t-lg first:border-t last:rounded-b-lg hover:bg-gray-200 cursor-pointer select-none"
              onClick={() => handleListClick(item)}
            >
              <div className="">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className=" text-sm">{item.description}</p>
              </div>
              <p className="font-semibold px-4">{`$ ${item.price}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  drinkList: PropTypes.array,
  setCartList: PropTypes.func,
};
export default ProductList;
