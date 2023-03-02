import { Link } from "react-router-dom";
import style from "./MakeAnOrder.module.css"

const MakeAnOrder = () => {
    return (
        <section className={style["make-an-order"]}>
            <h1 className={style["make-an-order-title"]}>Do you want to place a new order ?</h1>
            <Link className={style["make-an-order-btn"]} to={"/contacts"}>contact us !</Link>
        </section>
    );
}

export default MakeAnOrder;