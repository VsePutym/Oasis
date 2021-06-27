import BurgerBanner from '../../../images/banner.png'
import styles from '../Menu.module.css';

const Banner = () => {
  return (
    <div className={styles.bannerBurger}>
      <img src={BurgerBanner} alt=""/>
    </div>
  )
};

export default Banner