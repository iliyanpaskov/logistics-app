import style from "./Logo.module.css"

const Logo = () => {
    return (
        <article className={style["header-navigation-logo"]}>
            <i className="fa-solid fa-truck-fast"></i>
            <p className={style["header-navigation-logo-text"]}>S&F Logistics</p>
        </article>
    );
}

export default Logo;