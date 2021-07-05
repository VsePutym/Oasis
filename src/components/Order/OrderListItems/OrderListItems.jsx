import trash from '../../../images/trash.svg'
import s from './OrderListItems.module.css'
import styled from "styled-components";
import {convectRuB, totalPriceItem} from "../../../Functions/Functions";
import React, {useContext, useRef} from "react";
import {Context} from "../../../Functions/context";

const TrashBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border-color: transparent;
  background-image: url(${trash});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;


const OrderListItems = React.memo(({items, deleteItems, index}) => {

  const {getOpenItem: {setOpenItem}} = useContext(Context);

  let topping;
  const showToppings =(items) => {
    if(items.topping){
      return topping = items.topping.filter(item => item.checked).map(item => item.name).join(', ');
    }
  }
  showToppings(items);

  const buttonDelete = useRef(null);

  return (
    <div>
      <li className={s.items} onClick={(e) => e.target !== buttonDelete.current && setOpenItem({...items, index})} >
        <span  className={s.itemName}>{items.name} {items.choice}</span>
        <span>{items.count}</span>
        <span className={s.itemPrice}>{convectRuB(totalPriceItem(items))}</span>
        <TrashBtn ref={buttonDelete} onClick={() => deleteItems(index)}/>
      </li>
      {items.toppings && <div className={s.toppings}><h3>Допы:</h3> {topping}</div>}
    </div>
  )
});

export default OrderListItems;