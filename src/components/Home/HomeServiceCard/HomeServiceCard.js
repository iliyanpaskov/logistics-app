import { Link } from "react-router-dom";
import style from "./HomeServiceCard.module.css"

const HomeServiceCard = ({
    service
}) => {
    return (
        <li className={style["services-short-list-item"]}>
            <div className={style["services-short-list-item-icon"]}>
                <img src={service.icon.url} alt="plane" />
            </div>
            <div className={style["services-short-list-item-content"]}>
                <h4 className={style["services-short-list-item-title"]}>{service.service}</h4>
                <Link className={style["services-short-list-item-btn"]} to={`/services/${service.objectId}`}>read more</Link>
            </div>
        </li>
    );
}
export default HomeServiceCard;