import s from './Order.module.css';
import ButtonCheckout from "../Buttons/Battons";
import OrderListItems from "./OrderListItems/OrderListItems";
import {convectRuB, projection, totalPriceItem} from "../../Functions/Functions";
import React, {useContext} from "react";
import {Context} from "../../Functions/context";



const Order = React.memo(() => {
const {auth: {authentication, logIn}, getOrders: {hookOrders, setOrder}, getOrderConfirm: {setOpenOrderConfirm}} = useContext(Context);


  const deleteItems = index => {
    const newOrders = hookOrders.filter((item, i) => {
      return index !== i
    });
    setOrder(newOrders)
  }

  const total = hookOrders.reduce((result, hookOrders) => {
    return totalPriceItem(hookOrders) + result;
  }, 0)

  const totalCounter = hookOrders.reduce((result, hookOrders) => {
    return hookOrders.count + result;
  }, 0)

  const testAuth = () => {
    if (authentication === null) {
      logIn();
    } else {
      setOpenOrderConfirm(true)
    }
  }

  return (
    <div className={s.Order}>
      <h2 className={s.title}>Ваш заказ</h2>
      <div className={s.orderContent}>
        {hookOrders.length ?
          <ul className={s.orderList}>
            {hookOrders.map((items, index) => <OrderListItems key={index} index={index}
                                                              deleteItems={deleteItems} items={items}/>)}
          </ul>
          : <p className={s.emptyItem}>Список заказов пуст</p>}
      </div>
      {hookOrders.length
        ? <>
          <div className={s.total}>
            <span>Итого</span>
            <span>{totalCounter}</span>
            <span className={s.itemsPrice}>{convectRuB(total)}</span>
          </div>
          <div><ButtonCheckout onClick={testAuth}>Оформить</ButtonCheckout></div>
        </>
      : null}
    </div>
  )
})

export default Order;