import { useState, useEffect } from "react";
import * as guestServices from "../../services/guestServices.js"
import style from "./Services.module.css"
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const response = async () => {
            let result = await guestServices.getData('services');
            setState(Object.values(result));
        }
        response();
        // console.log(state);
    }, []);

    return (
        <section className={style["services-wrapper"]}>
            <h1 className={style["services-title"]}>best service & best price</h1>
            <section className={style["services-list-wrapper"]}>
                <ul className={style["services-list"]}>
                    {state[0]?.map(x => <ServicesCard key={x.objectId} service={x} />)}
                </ul>
            </section>
        </section>
    );
}


export default Services;