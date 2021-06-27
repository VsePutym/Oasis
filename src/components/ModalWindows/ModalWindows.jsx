import s from './ModalWindows.module.css';
import styled from 'styled-components';
import ButtonCheckout from "../Buttons/Battons";
import CountItem from "../CountItem/CountItem";
import {convectRuB, totalPriceItem} from "../../Functions/Functions";
import Toppings from "./Toppings/Toppings";
import Choices from "./Choices/Choices";
import UseCount from "../../Hooks/useCount";
import UseToppings from "../../Hooks/useToppings";
import UseChoices from "../../Hooks/useChoices";

const BannerItem = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;



const ModalWindows = ({hookOpenItem, setOpenItem, hookOrders, setOrder}) => {
  const getCounter = UseCount(hookOpenItem.count);
  const getToppings = UseToppings(hookOpenItem);
  const getChoices =  UseChoices();
  const isEdit = hookOpenItem.index > -1;

  debugger


  const closeModal = e => {
      if(e.target.id === 'overlay'){
        setOpenItem(null);
    }
  }

  const order ={
    ...hookOpenItem,
    count: getCounter.hookCount,
    topping: getToppings.hookToppings,
    choice: getChoices.hookChoice
  };


  const editOrder = () => {
    const newOrders = [...hookOrders];
    newOrders[hookOpenItem.index] = order;
    console.log(hookOrders)
    setOrder(newOrders);
    console.log(hookOrders)
    // setOpenItem(null);

  }


  const addOrder = () => {
    setOrder([...hookOrders, order]);
    setOpenItem(null);
  }


  return (
    <div id='overlay' className={s.overlay} onClick={closeModal} >
      <div className={s.modal}>
        <BannerItem img={hookOpenItem.img}/>
        <div className={s.Content}>
          <div className={s.ItemInfo}>
            <p>{hookOpenItem.name}</p>
            <p>{convectRuB(hookOpenItem.price)}</p>
          </div>
          < CountItem {...getCounter}/>
          {hookOpenItem.toppings && <Toppings {...getToppings} />}
          {hookOpenItem.choices  && <Choices {...getChoices} hookOpenItem={hookOpenItem}/>}
          <div className={s.TotalPriceItem}>
            <span>Цена:</span>
            <span>{convectRuB(totalPriceItem(order))}</span>
          </div>
          <ButtonCheckout disabled={order.choices && !order.choice} onClick={isEdit ? editOrder : addOrder}>{isEdit ? <span>Edit order</span> : <span>Add this order</span> }</ButtonCheckout>
        </div>
      </div>
    </div>
  )
}

export default ModalWindows;