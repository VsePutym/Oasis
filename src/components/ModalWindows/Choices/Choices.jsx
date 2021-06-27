import s from "../Toppings/Toppings.module.css";

const Choices = ({hookOpenItem, hookChoice, changeChoice}) => {

  return (
    <div>
      <h3>Выбирай:</h3>
      <div className={s.ToppingWrapper}>
        {hookOpenItem.choices.map((item, i) => (
          <label key={i} className={s.ToppingLabel}>
            <input name='choices' checked={hookChoice === item} type='radio' className={s.ToppingInput} value={item} onChange={changeChoice}/>{item}
          </label>
        ))}
        </div>
    </div>
  )
}

export default Choices;