import { AuthContext } from '../../context/AuthenticationContext';
import { useContext } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Logo from '../Logo/Logo';

import style from "./Header.module.css"

const Header = () => {
    const { logoutData,isAuthenticated } = useContext(AuthContext);
    const navigation = useNavigate();
    const userLogout = () => {
        logoutData();
        navigation("/");
        //TODO notifications
    }
  
    return (
        <header className={style["header-wrapper"]}>
            <section className={style["header-navigation-wrapper"]}>
                <Logo />
                <nav className={style["header-navigation"]}>
                    <ul className={style["header-navigation-list"]}>
                        <li className={style["header-navigation-list-item"]}>
                            <Link to="/" >Home</Link>
                        </li>
                        <li className={style["header-navigation-list-item"]}>
                            <Link to="/about" >About</Link>
                        </li>
                        <li className={style["header-navigation-list-item"]}>
                            <Link to="/services" >Services & Price</Link>
                        </li>
                        <li className={style["header-navigation-list-item"]}>
                            <Link to="/contacts" >Contacts</Link>
                        </li>
                    </ul>
                </nav>

                <article className={style["header-navigation-user"]}>
                    <ul className={style["header-navigation-user-list"]}>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="" >My Profile</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="" >My Orders</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link onClick={userLogout} >Logout</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="/login" >Login</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="/signup" >Sign Up</Link>
                        </li>
                        <li className={`${style["header-navigation-user-list-item"]} ${style["get-a-quote"]}`}>
                            <Link to="/contacts" >Get A Quote</Link>
                        </li>
                    </ul>
                </article>
            </section>

            <section className={style["header-img-wrapper"]}>
                <article className={style["header-img-text-wrapper"]}>
                    <p className={style["header-img-wrapper-name"]}>Safe & Fast</p>
                    <p className={style["header-img-wrapper-text"]}>Logistics Services</p>
                </article>
            </section>
        </header>
    );
}

export default Header;