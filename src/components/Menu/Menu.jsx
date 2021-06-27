import styles from './Menu.module.css';
import DBMenu from '../DBMenu/DBMenu';
import ListItems from "./ListItems/ListItems";
import Banner from "./Banners/Banners";

const Menu =({...getOpenItem}) => {

  return (
    <div className={styles.menu}>
  <Banner />
      <section className={styles.section}>
        <h2>Burgers</h2>
        <ListItems {...getOpenItem} DBMenu={DBMenu.burger}/>
      </section>

      <section className={styles.section}>
        <h2>Snacks</h2>
        <ListItems {...getOpenItem} DBMenu={DBMenu.other}/>
      </section>
    </div>
  )
}

export default Menu;