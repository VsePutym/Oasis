import logo from '../../images/logo.svg'
import loginImg from '../../images/sign.svg'
import styles from './NavBar.module.css'

const NavBar = ({authentication, logIn, logOut}) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt=""/>
        <h1 className={styles.H1}>Oasis Gourmet</h1>
      </div>
      {authentication
        ? <div className={styles.User}>
          <figure className={styles.Figure}>
            <div><img src={loginImg} alt={authentication.displayName}/></div>
            <figcaption>{authentication.displayName}</figcaption>
          </figure>
          <button onClick={logOut} className={styles.logOut} title='Выйти'>X</button>
        </div>
        : <div className={styles.Login} onClick={logIn}>
          <div>
            <button className={styles.btn}>Войти</button>
          </div>
          <div><img src={loginImg} alt=""/></div>
        </div>}
    </div>
  )
};

export default NavBar;