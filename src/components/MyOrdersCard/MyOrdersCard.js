import { Link } from "react-router-dom";
import style from "./MyOrdersCard.module.css";

const MyOrdersCard = () => {
    return (
        <li className={style["orders-list-item"]}>
        <section className={style["orders-list-item-status-wrapper"]}>
            <div className={style["orders-list-item-status"]}>
                <h3 className={style["orders-list-item-status-title"]}>Order Id:</h3>
                <p className={style["orders-list-item-status-content"]}>ha89Pu</p>
            </div>
            <div className={style["orders-list-item-status"]}>
                <h3 className={style["orders-list-item-status-title"]}>Status:</h3>
                <p className={style["orders-list-item-status-content"]}>Sent</p>
            </div>
            <div className={style["orders-list-item-status"]}>
                <h3 className={style["orders-list-item-status-title"]}>Service:</h3>
                <p className={style["orders-list-item-status-content"]}>Land Transport</p>
            </div>
        </section>
        <section className={style["orders-list-item-info"]}>
                <h3 className={style["orders-list-item-info-title"]}>Information:</h3>
                <p className={style["orders-list-item-info-content"]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, neque!</p>
            <Link className={style["orders-list-item-info-btn"]} to="/contacts"> 
                More Information
            </Link>
        </section>
    </li>
)
}
export default MyOrdersCard;
