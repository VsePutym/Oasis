import s from './Toppings.module.css'

const Toppings = ({hookToppings, checkToppings}) => {

  return (
    <div>
      <h3>Добавки</h3>
      <div className={s.ToppingWrapper}>
        {hookToppings.map((item, index) => (
          <label key={index} className={s.ToppingLabel}>
            <input className={s.ToppingInput} checked={item.checked}  onChange={() => checkToppings(index)} type="checkbox"/>{item.name}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Toppings;