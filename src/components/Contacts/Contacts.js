import style from "./Contacts.module.css";
import ContactsForm from "./ContactsForm/ContactsForm";

const Contacts = () => {
    return (
        <article className={style["contacts-section"]}>
            <section className={style["contacts-phone"]}>
                <article className={style["contacts-phone-wrapper"]}>
                    <i className="fa-solid fa-phone"></i>
                    <h1 className={style["contacts-phone-number"]}>24/7 Call Center: +012 333 4444 </h1>
                </article>
                <img src="/images/team-8.jpg" alt="Call center" />
            </section>

            <section className={style["contacts-form-wrapper"]}>
                <h4 className={style["contacts-form-pre-title"]}>contact us</h4>
                <h1 className={style["contacts-form-title"]}>Contact For Any Queries</h1>
                <article  className="contacts-form-wrapper">
                    <ContactsForm/>
                </article>
            </section>
        </article>
    );
}

export default Contacts;