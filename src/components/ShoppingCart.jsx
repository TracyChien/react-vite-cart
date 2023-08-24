import PropTypes from "prop-types";
import { useState } from "react";

const ShoppingCart = ({ cartList, setCartList, setOrderList }) => {
  const [note, setNote] = useState("");

  function handleOrderClick() {
    const tempOrder = {
      id: new Date(),
      list: cartList,
      note: note,
    };
    setOrderList((prevOrder) => {
      return [...prevOrder, tempOrder];
    });
    setCartList([]);
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-2">購物車</h2>
      {cartList.length > 0 ? (
        <>
          <table className="table w-full">
            <thead>
              <tr className="border-b border-1 bg-slate-200">
                <th scope="col" width="50">
                  操作
                </th>
                <th scope="col" width="90">
                  品項
                </th>
                <th scope="col" width="200">
                  描述
                </th>
                <th scope="col" width="90">
                  數量
                </th>
                <th scope="col" width="50">
                  單價
                </th>
                <th scope="col" width="90">
                  小計
                </th>
              </tr>
            </thead>
            <tbody className="divide-solid divide-y">
              {cartList.map((carItem) => {
                return (
                  <tr key={`car_${carItem.id}`}>
                    <td className="py-2 text-center">
                      <button
                        type="button"
                        className="border px-2 rounded"
                        onClick={() => {
                          setCartList((prevItem) =>
                            prevItem.filter((fItem) => fItem.id !== carItem.id)
                          );
                        }}
                      >
                        x
                      </button>
                    </td>
                    <td className="font-semibold">{carItem.name}</td>
                    <td>
                      <small>{carItem.description}</small>
                    </td>
                    <td>
                      <select
                        className="w-5/6 border rounded border-gray-400"
                        value={carItem.qty}
                        onChange={(e) => {
                          setCartList((prevList) => {
                            return prevList.map((prevItem) =>
                              prevItem.id === carItem.id
                                ? {
                                    ...prevItem,
                                    qty: Number(e.target.value),
                                  }
                                : prevItem
                            );
                          });
                        }}
                      >
                        {[...Array(10).keys()].map((num) => (
                          <option key={`num_${num}`} value={num + 1}>
                            {num + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="text-center">$ {carItem.price}</td>
                    <td className="text-center">
                      $ {Number(carItem.price) * Number(carItem.qty)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-3">
            <label htmlFor="note" className="block mb-1 font-medium">
              備註
            </label>
            <textarea
              id="note"
              placeholder="請在此輸入註明"
              rows="3"
              className="border border-gray-400 w-full rounded p-2"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <div className="mt-3 py-1 flex justify-between border-b border-gray-400">
            <p className="font-semibold">總計</p>
            <p>
              $
              {cartList
                .reduce(
                  (total, v) => total + Number(v.qty) * Number(v.price),
                  0
                )
                .toLocaleString()}
            </p>
          </div>
          <div className="text-right mt-5">
            <button
              className="border border-indigo-500 bg-indigo-500 text-white rounded-md py-1 px-4 transition duration-500 ease select-none hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
              onClick={handleOrderClick}
            >
              送出訂單
            </button>
          </div>
        </>
      ) : (
        <p>無項目</p>
      )}
    </>
  );
};

ShoppingCart.propTypes = {
  cartList: PropTypes.array,
  setCartList: PropTypes.func,
  setOrderList: PropTypes.func,
};

export default ShoppingCart;
