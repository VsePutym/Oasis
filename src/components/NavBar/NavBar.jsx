import logo from '../../images/logo.svg'
import loginImg from '../../images/sign.svg'
import styles from './NavBar.module.css'

const NavBar = () => {
  return(
    <div className={styles.NavBar}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt=""/>
        <h1 className={styles.H1}>Oasis Gourmet</h1>
      </div>
      <div className={styles.Login}>
        <div><button className={styles.btn}>Login</button></div>
        <div><img src={loginImg} alt=""/></div>
      </div>
    </div>
  )
}

export default NavBar;