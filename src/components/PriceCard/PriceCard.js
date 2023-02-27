import style from "./PriceCard.module.css"
import { Link } from "react-router-dom";

const PriceCard = ({
    period,
    price,
    service
}) => {
    return (
        <article className={style["price-card"]}>
            <h1 className={style["price-card-service"]}>{service}</h1>
            <div className={style["price-wrapper"]}>
                <h1 className={style["price"]}>{`$ ${price}`}</h1>
            </div>
            <h2 className={style["price-period"]}>{`For one : ${period}`}</h2>
            <p className={style["price-clients"]}>best deals for loyal clients !</p>
            <Link className={style["price-card-btn"]} to="/contacts">order now </Link>
        </article>
    );
}

export default PriceCard;