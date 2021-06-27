import s from './Order.module.css';
import ButtonCheckout from "../Buttons/Battons";
import OrderListItems from "./OrderListItems/OrderListItems";
import {convectRuB, totalPriceItem} from "../../Functions/Functions";

const  Order = ({hookOrders, setOrder, setOpenItem}) => {

  const deleteItems = index => {


    // const newOrders = [...hookOrders]
    // newOrders.splice(index, 1);
    // setOrder(newOrders)
    const newOrders = hookOrders.filter((item, i) => {
      return index !== i});
    setOrder(newOrders)
  }

  const total = hookOrders.reduce((result, hookOrders) => {
    return totalPriceItem(hookOrders) + result;
  }, 0)

  const totalCounter = hookOrders.reduce((result, hookOrders) => {
    return hookOrders.count + result;
  }, 0)


  return (
    <div className={s.Order}>
      <h2 className={s.title}>Ваш заказ</h2>
      <div className={s.orderContent}>
        {hookOrders.length ?
       <ul className={s.orderList}>
         {hookOrders.map((items, index) => <OrderListItems key={index} setOpenItem={setOpenItem} index={index} deleteItems={deleteItems} items={items} />)}
        </ul>
           : <p className={s.emptyItem}>Список заказов пуст</p>}
      </div>
        <div className={s.total}>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <span className={s.itemsPrice}>{convectRuB(total)}</span>
      </div>
      <div><ButtonCheckout> Оформить</ButtonCheckout></div>
    </div>
  )
}

export default Order;