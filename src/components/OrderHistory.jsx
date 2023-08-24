import PropTypes from "prop-types";

const OrderHistory = ({ orderList }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">歷史訂單</h2>
      {orderList.length > 0 ? (
        <div className="flex flex-col items-center">
          {orderList.map((order) => {
            return (
              <div
                key={`order_${order.id}`}
                className="border border-slate-400 rounded py-4 px-6 w-full md:w-3/4 my-2 first:mt-0 last:mb-0 hover:bg-slate-100"
              >
                <div className="flex justify-between">
                  <h3 className="font-bold mb-3 text-lg">訂單明細</h3>
                  <p className="text-right text-sm">
                    {order.id.toLocaleString("ja-JP", { hour12: false })}
                  </p>
                </div>
                <table className="table w-full">
                  <thead>
                    <tr className="border-b border-1">
                      <th scope="col" width="90" className="text-left">
                        品項
                      </th>
                      <th scope="col" width="90">
                        數量
                      </th>
                      <th scope="col" width="90">
                        小計
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-solid divide-y">
                    {order.list.map((item) => {
                      return (
                        <tr key={`${orderList.id}_${item.id}`}>
                          <td className="font-semibold py-2">{item.name}</td>
                          <td className="text-center">{item.qty}</td>
                          <td className="text-center">
                            $ {Number(item.price) * Number(item.qty)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {order.note !== "" && (
                  <div className="mt-3">
                    <span htmlFor="note" className="block mb-1 font-bold">
                      備註
                    </span>
                    <p className=" text-sm">{order.note}</p>
                  </div>
                )}
                <div className="mt-3 py-1 flex justify-end gap-2 ">
                  <p className="font-semibold text-lg">總計</p>
                  <p>
                    $
                    {order.list
                      .reduce(
                        (total, v) => total + Number(v.qty) * Number(v.price),
                        0
                      )
                      .toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>無訂單資料</p>
      )}
    </>
  );
};

OrderHistory.propTypes = {
  orderList: PropTypes.array,
};

export default OrderHistory;
