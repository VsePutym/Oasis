import s from "./Cart.module.scss";
import {useContext} from "react";
import {Context} from "../../Functions/Context";
import trash from '../../images/Cart/trash.svg'
import {totalPriceItem} from "../../Functions/Functions";

const OrderListItems = ({item, index, deleteOrder}) => {
  const {getHookOpenItem: {setHookOpenItem}} = useContext(Context);

  return(
    <div className={s.orders}>
      <div className={s.order} key={index}>
        <p onClick={() => setHookOpenItem({...item, index})}>{item.name}</p>
        <p className={s.price}>{totalPriceItem(item)}р <span>{item.count}шт</span></p>
        <img onClick={() => deleteOrder(index)} src={trash} alt=""/>
      </div>
    </div>
  )
}
export default OrderListItems;