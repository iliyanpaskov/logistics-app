import Logo from "../common/Logo/Logo";
import style from "./ModalVideo.module.css";

const ModalVideo = ({ open, onClose }) => {
    if (!open) {
        return null;
    }

    return (
        <section className={style["modal-wrapper"]}>
            <article className={style.modal}>
                <Logo />
                <span className={style["close-modal-btn"]} onClick={onClose}><i className="fa-solid fa-x"></i></span>
                <div className={style["modal-video"]}>
                    <iframe className={style["video"]} src="https://www.youtube.com/embed/C4jjFanHZo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <button className={style["close-btn"]} onClick={onClose}>close</button>
            </article>
        </section>
    )
}

export default ModalVideo;