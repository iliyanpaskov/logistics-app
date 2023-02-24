import style from "./Contacts.module.css"

const Contacts = () => {
    return (
        <article className={style["contacts-section"]}>
            <section className={style["contacts-map"]}>

            </section>
            <section className={style["contacts-form-wrapper"]}>
                <h4 className={style["contacts-form-pre-title"]}>contact us</h4>
                <h1 className={style["contacts-form-title"]}>Contact For Any Queries</h1>
                <form action="" className="contacts-form">

                </form>
            </section>
        </article>
    );
}

export default Contacts;