import style from "./ServicesCard.module.css"
import { Link } from "react-router-dom";

const ServicesCard = ({
    service
}) => {
    return (
        <li className={style["list-item"]}>
            <section className={style["list-item-content-wrapper"]}>
                <section className={style["list-item-img-wrapper"]} >
                    <img src={service.serviceImage.url} alt="" />
                </section>
                <section className={style["list-item-content"]}>
                    <h2 className={style["list-item-content-title"]}>{service.service}</h2>
                    <p className={style["list-item-content-text"]}>{service.description}</p>
                </section>
            </section>
            <Link to={service.objectId} className={style["list-item-btn"]}> read more</Link>
        </li>
    );
}

export default ServicesCard;