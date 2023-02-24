import style from "./Error.module.css";

const Error = () => {
    return (
        <section className={style["error-section"]}>
            <h1 className={style["error-title"]}>404! Page not found!</h1>
        </section>
    )
}

export default Error;