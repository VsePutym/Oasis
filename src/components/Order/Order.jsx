import s from './Order.module.css';
import ButtonCheckout from "../Buttons/Battons";
import OrderListItems from "./OrderListItems/OrderListItems";
import {convectRuB, projection, totalPriceItem} from "../../Functions/Functions";

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no toppings'],
  choice: ['choices', item => item ? item : 'no choices']
}

const Order = ({hookOrders, setOrder, setOpenItem, authentication, logIn, firebaseDatabase}) => {

  const dataBase = firebaseDatabase();

  const sendOrder = () => {
    const newOrder = hookOrders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order: newOrder
    })
  }

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
      sendOrder();
      setOrder([]);
    }
  }

  return (
    <div className={s.Order}>
      <h2 className={s.title}>Ваш заказ</h2>
      <div className={s.orderContent}>
        {hookOrders.length ?
          <ul className={s.orderList}>
            {hookOrders.map((items, index) => <OrderListItems key={index} setOpenItem={setOpenItem} index={index}
                                                              deleteItems={deleteItems} items={items}/>)}
          </ul>
          : <p className={s.emptyItem}>Список заказов пуст</p>}
      </div>
      <div className={s.total}>
        <span>Итого</span>
        <span>{totalCounter}</span>
        <span className={s.itemsPrice}>{convectRuB(total)}</span>
      </div>
      <div><ButtonCheckout onClick={testAuth}>Оформить</ButtonCheckout></div>
    </div>
  )
}

export default Order;