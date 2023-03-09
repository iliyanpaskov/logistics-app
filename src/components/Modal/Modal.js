
import Logo from "../common/Logo/Logo"
import style from "./Modal.module.css"

const Modal = ({ open, onClose, onDelete }) => {
    if (!open) {
        return null;
    }

    return (
        <section className={style["modal-wrapper"]}>
            <article className={style.modal}>
                <Logo />
                <p className={style["modal-content"]}>
                    Are you sure you want to <span className={style.bold}>delete</span> your account?
                </p>
                <section className={style["modal-btns-wrapper"]}>
                    <button className={`${style["modal-btn"]} ${style["modal-btn-cancel"]}`} onClick={onClose}>Cancel</button>
                    <button className={`${style["modal-btn"]} ${style["modal-btn-delete"]}`} onClick={onDelete} >Delete</button>
                </section>
            </article>
        </section>
    )
}

export default Modal;