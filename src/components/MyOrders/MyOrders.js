import { AuthContext } from "../../context/AuthenticationContext";
import { useContext } from "react";
import { useUserFetch } from "../../hooks/useUserFetch";
import style from "./MyOrders.module.css";
import MyOrdersCard from "../MyOrdersCard/MyOrdersCard";

const MyOrders = () => {

    return (
        <section className={style["orders-section"]}>
            {/* <article className={style["orders-list-wrapper"]}> */}
                <ul className={style["orders-list"]}>
                    <MyOrdersCard/>
                </ul>
            {/* </article> */}
        </section>
    );
}

export default MyOrders;