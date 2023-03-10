import { AuthContext } from "../../context/AuthenticationContext";
import { useContext } from "react";
import { useUserFetch } from "../../hooks/useUserFetch";
import style from "./MyOrders.module.css";
import MyOrdersCard from "../MyOrdersCard/MyOrdersCard";
import Loading from "../common/Loading/Loading";
import MakeAnOrder from "../MakeAnOrder/MakeAnOrder";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [state, isLoaded, hasOrders] = useUserFetch(user.objectId);

    return (
        <section className={style["orders-section"]}>
            {isLoaded 
                ? <article className={style["orders-list-wrapper"]}>
                    {hasOrders
                        ? <>
                            <ul className={style["orders-list"]}>
                                {state.myOrders.map(x => <MyOrdersCard key={x.orderId} order={x} />)}
                            </ul>
                            <MakeAnOrder />
                        </>
                        : <MakeAnOrder />
                    }
                </article>
                : <Loading />
            }
        </section>
    );
}

export default MyOrders;