import {convectRuB, projection, totalPriceItem} from "../../../Functions/Functions";
import ButtonCheckout from "../../Buttons/Battons";
import s from './OrderConfirm.module.css';
import {useContext} from "react";
import {Context} from "../../../Functions/context";
import firebase from "firebase";

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no toppings'],
  choice: ['choices', item => item ? item : 'no choices']
}

const sendOrder = (database, hookOrders, authentication) => {

  const newOrder = hookOrders.map(projection(rulesData));
  database.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  })
}


const OrderConfirm = () => {

  const {getOrders: {setOrder, hookOrders}, auth: {authentication}, getOrderConfirm: {setOpenOrderConfirm}, database} = useContext(Context);

  const total = hookOrders.reduce((result, hookOrders) => {
    return totalPriceItem(hookOrders) + result;
  }, 0)


  return(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <div className={s.OrderTitle}>{authentication.displayName}</div>
        <p className={s.Text}>Осталось только подтвердить ваш заказ</p>
        <div className={s.Total}>
          <span>Итого</span>
          <div className={s.TotalPrice}>{convectRuB(total)}</div>
        </div>
        <ButtonCheckout onClick={() => {
          sendOrder(database, hookOrders, authentication);
          setOrder([]);
          setOpenOrderConfirm(false);
        }}>Подтвердить</ButtonCheckout>
      </div>
    </div>
  )

}

export default OrderConfirm;