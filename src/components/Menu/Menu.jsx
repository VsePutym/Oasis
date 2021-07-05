import styles from './Menu.module.css';
import ListItems from "./ListItems/ListItems";
import Banner from "./Banners/Banners";
import useAxios from "../../Hooks/useAxios";
import Preloader from "../../Rpeloader/Preloader";
import React, {useContext} from "react";
import {Context} from "../../Functions/context";

const Menu = React.memo(({DBMenu}) => {
  // const {getOpenItem: {setOpenItem}} = useContext(Context);

  return (
    <div className={styles.menu}>
      {DBMenu
        ? <>
          <Banner/>
          <section className={styles.section}>
            <h2>Burgers</h2>
            <ListItems  DBMenu={DBMenu.burger}/>
          </section>

          <section className={styles.section}>
            <h2>Snacks</h2>
            <ListItems  DBMenu={DBMenu.other}/>
          </section>
        </>
        : <Preloader />
      }
    </div>
  )
});

export default Menu;