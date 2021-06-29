import styles from './Menu.module.css';
import ListItems from "./ListItems/ListItems";
import Banner from "./Banners/Banners";
import useAxios from "../../Hooks/useAxios";
import Preloader from "../../Rpeloader/Preloader";

const Menu = ({...getOpenItem}) => {

  const res = useAxios();
  const DBMenu = res.response;


  return (
    <div className={styles.menu}>
      {DBMenu
        ? <>
          <Banner/>
          <section className={styles.section}>
            <h2>Burgers</h2>
            <ListItems {...getOpenItem} DBMenu={DBMenu.burger}/>
          </section>

          <section className={styles.section}>
            <h2>Snacks</h2>
            <ListItems {...getOpenItem} DBMenu={DBMenu.other}/>
          </section>
        </>
        : res.error ? <div>Error suchca</div>
        : <Preloader />
      }
    </div>
  )
};

export default Menu;