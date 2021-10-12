import s from './ModalFood.module.scss';
import ButtonCart from "../../Buttons/ButtonCart";
import CountItem from "../../CountItem/CountItem";
import {UseCountItem} from "../../../hooks/countItem/UseCountItem";
import {totalPriceItem} from "../../../Functions/Functions";
import Choices from "./Choices/Choices";
import UseChoices from "../../../hooks/Menu/UseChoices";
import {useEffect} from "react";

const ModalFood = ({hookOpenItem, setHookOpenItem, hookOrders, setHookOrders}) => {
  const getChoices =  UseChoices(hookOpenItem);
  const getHookCounter = UseCountItem(hookOpenItem.count);
  const isEdit = hookOpenItem.index > -1;

  const btnAddOrder = 'Заказать';
  const btnEditOrder = 'Изменить';

  const order = {
    ...hookOpenItem,
    count: getHookCounter.hookCountItem
  }

  return (
    <div>
      <div className={s.overlay} onClick={() => setHookOpenItem(false)}/>
      <div className={s.modalHotDish}>
        <div className={s.close} onClick={() => setHookOpenItem(false)}>X</div>
        <div className={s.img} style={{backgroundImage: `url(${hookOpenItem.img})`}} />
        <h3 className={s.title}>{hookOpenItem.name}</h3>
        <p>{hookOpenItem.description}</p>
        <div>
          {hookOpenItem.choices
          ? <div className={s.wrapper}>
              <div>Цена<span>{hookOpenItem.price}р</span></div>
              <div className={s.weight}><Choices hookOpenItem={hookOpenItem} {...getChoices} /></div>
              <div className={s.totalPriceItem}>Итог<span>{totalPriceItem(order)}</span>р</div>
            </div>

            : <div>
              <div className={s.wrapper}>
                <div>Цена<span>{hookOpenItem.price}P</span></div>
                <div className={s.weight}>{hookOpenItem.weight}г</div>
                <div className={s.totalPriceItem}>Итог<span>{totalPriceItem(order)}</span>Р</div>
              </div>
              <CountItem {...getHookCounter}/>
            </div>}

        </div>

        <ButtonCart isEdit={isEdit} hookOrders={hookOrders} setHookOrders={setHookOrders}
                    btnAddOrder={btnAddOrder} btnEditOrder={btnEditOrder}
                    hookOpenItem={hookOpenItem}
                    setHookOpenItem={setHookOpenItem} order={order} />
      </div>
    </div>
  )
}

export default ModalFood;