import {useState} from "react";


//Функция которая возвращает обьект и приписывает к кажому объекту флаг checked
//Было toppings: ['Бекон', 'Кетчуп', 'Сыр Чеддер', 'Огурцы', 'Помидор', 'Халапеньо'];
//Стало toppings: [{name: 'Бекон', checked: false}, {name:'Кетчуп', checked: false} ....],
const getToppings = value => value.map(item => ({
  name:item,
  checked: false
}))

const UseToppings = (getOpenItem) => {

const readyTopping = getOpenItem.topping ? getOpenItem.topping : getOpenItem.toppings ? getToppings(getOpenItem.toppings) : [];

  const [hookToppings, setToppings] = useState(readyTopping);

  //Меняет флажки
const checkToppings = index => {
    setToppings(hookToppings.map((item, i) => {
      const newItem = {...item};
      if(i === index){
        newItem.checked = !newItem.checked;
      }
      return newItem;
    }))
}

  return {hookToppings, checkToppings}
}
export default UseToppings;