import { useEffect, useState } from "react";
import OrderHistory from "./components/OrderHistory";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const drinkData = [
  {
    id: 1,
    name: "珍珠奶茶",
    description: "香濃奶茶搭配QQ珍珠",
    price: 50,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    description: "清新冬瓜配上新鮮檸檬",
    price: 45,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    description: "綠茶與檸檬的完美結合",
    price: 55,
  },
  {
    id: 4,
    name: "四季春茶",
    description: "香醇四季春茶，回甘無比",
    price: 45,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    description: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    description: "檸檬與冰茶的清新組合",
    price: 45,
  },
  {
    id: 7,
    name: "芒果綠茶",
    description: "芒果與綠茶的獨特風味",
    price: 55,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    description: "抹茶與鮮奶的絕配",
    price: 60,
  },
];

function App() {
  const [drinkList, setDrinkList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setDrinkList(drinkData);
  }, []);

  return (
    <div className=" container">
      <h1 className="py-4 text-3xl font-bold text-center">點餐操作系統</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-7 mb-7">
        <div className="basis-1/3">
          <ProductList drinkList={drinkList} setCartList={setCartList} />
        </div>
        <div className="basis-2/3 bg-yellow-100 md:bg-white">
          <ShoppingCart
            cartList={cartList}
            setCartList={setCartList}
            setOrderList={setOrderList}
          />
        </div>
      </div>
      <hr />
      <div className="mt-3 mb-6">
        <OrderHistory orderList={orderList} />
      </div>
    </div>
  );
}

export default App;
