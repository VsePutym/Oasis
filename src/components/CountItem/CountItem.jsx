import s from './CountItem.module.css'

const CountItem = ({hookCount, setCount, onChange}) => {

  const plusCount = () => {
    setCount(hookCount + 1);
  }

  const minusCount = () =>{
    setCount(hookCount - 1);
  }

  return(
    <div className={s.CountWrapper}>
      <span>Колличество</span>
      <div>
        <button onClick={minusCount} disabled={hookCount <= 1} className={s.btnCount}>-</button>
        <input type='number' min='1' max='10' className={s.inputCount} value={hookCount < 1 ? 1 : hookCount} onChange={onChange}/>
        <button onClick={plusCount} className={s.btnCount}>+</button>
      </div>
    </div>
  )
}

export default CountItem;