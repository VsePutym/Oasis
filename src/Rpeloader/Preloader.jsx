import s from './Preloader.module.css';
import styled from 'styled-components';

const ItemPreloader = styled.div`
  background-color: #1c2326;
  height: ${(props) => props.height}px;
`

const Preloader = () => {

 const height =  document.documentElement.clientHeight

  return (
    <ItemPreloader height={height}>
    <div className={s.banterLoader}>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
      <div className={s.banterLoaderBox}></div>
    </div>
    </ItemPreloader>
  )
}

export default Preloader;