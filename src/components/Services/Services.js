import { useState, useEffect } from "react";
import ServicesCard from "./ServicesCard/ServicesCard";
import PriceCard from "./PriceCard/PriceCard";
import Loading from "../Loading/Loading";
import * as guestServices from "../../services/guestServices.js"
import style from "./Services.module.css"

const Services = () => {
    const [state, setState] = useState([]);

    useEffect(() => {            
            const response = async () => {
                let result = await guestServices.getData('services');
                setState(Object.values(result));
            }
            response();
    }, []);

    return (
        <section className={style["services-wrapper"]}>
            <h1 className={style["services-title"]}>best service & best price</h1>
            <section className={style["services-list-wrapper"]}>
                <h1 className={style["services-list-title"]}>services:</h1>
                <ul className={style["services-list"]}>
                    {state[0] ? state[0].map(x => <ServicesCard key={x.objectId} service={x} />) : <Loading />}
                </ul>
            </section>

            <section className={style["services-price"]}>
                <h1 className={style["services-price-title"]}>Affordable Pricing Packages:</h1>
                <ul className={style["services-price-list"]}>
                    {
                        state[0]
                            ? state[0].map((x) => Object.entries(x.price).map(y => <PriceCard key={y[1]} service = {x.service} period={y[0]} price={y[1]} />))
                            : <Loading />
                    }
                </ul>
            </section>


        </section>
    );
}


export default Services;