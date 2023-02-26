import { Link } from 'react-router-dom';

import style from "./Header.module.css"

const Header = () => {
    return (
        <header className={style["header-wrapper"]}>
            <section className={style["header-navigation-wrapper"]}>

                <article className={style["header-navigation-logo"]}>
                    <i className="fa-solid fa-truck-fast"></i>
                    <p className={style["header-navigation-logo-text"]}>S&F Logistics</p>
                </article>

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
                            <Link to="" >Logout</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="" >Login</Link>
                        </li>
                        <li className={style["header-navigation-user-list-item"]}>
                            <Link to="" >Register</Link>
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