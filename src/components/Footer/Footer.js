import { Link } from "react-router-dom";
import style from "../Footer/Footer.module.css"
import Logo from "../common/Logo/Logo";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <section className={style["footer-lists-wrapper"]}>
                <ul className={style["footer-list"]}>
                    <h3 className={style["footer-list-title"]}> get in touch</h3>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p className={style["footer-list-item-text"]}>7777 Street, New York, USA</p>
                    </li>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-phone"></i>
                        <p className={style["footer-list-item-text"]}>+012 333 4444</p>
                    </li>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-envelope"></i>
                        <p className={style["footer-list-item-text"]}>sflogistics@mail.com</p>
                    </li>
                    <li className={style["footer-list-item-social-medias"]}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </li>
                </ul>

                <ul className={style["footer-list"]}>
                    <h3 className={style["footer-list-title"]}> quick links</h3>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className={style["footer-list-item-text"]} to="/">Home</Link>
                    </li>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className={style["footer-list-item-text"]} to="/about">About</Link>
                    </li>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className={style["footer-list-item-text"]} to="/services">Services & Price</Link>
                    </li>
                    <li className={style["footer-list-item"]}>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link className={style["footer-list-item-text"]} to="/contacts">Contacts</Link>
                    </li>
                </ul>

                <article className={`${style["footer-list"]} ${style["footer-list-sf"]}`}>
                    <h3 className={style["footer-list-title"]}> WE ARE S&F LOGISTICS</h3>
                    <p className={style["footer-list-text"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt, suscipit
                        non facilis repudiandae mollitia reprehenderit itaque sed? Cupiditate iure placeat
                        at ex quod, distinctio explicabo praesentium dolor nisi aut.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt, suscipit
                        non facilis repudiandae mollitia reprehenderit itaque sed? Cupiditate iure placeat
                        at ex quod, distinctio explicabo praesentium dolor nisi aut.
                    </p>
                </article>
            </section>

            <section className={style["footer-bottom"]}>
                <p className={style["footer-bottom-text"]}>
                    <span> &copy; S&F LOGISTICS </span>  All copyrights reserved.
                </p>
                <Logo />
            </section>

        </footer>
    );
}

export default Footer;