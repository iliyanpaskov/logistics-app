import ServicesCard from "./ServicesCard/ServicesCard";
import PriceCard from "./PriceCard/PriceCard";
import Loading from "../Loading/Loading";
import style from "./Services.module.css"

const Services = ({services}) => {
    
    return (
        <section className={style["services-wrapper"]}>
            <h1 className={style["services-title"]}>best service & best price</h1>
            <section className={style["services-list-wrapper"]}>
                <h1 className={style["services-list-title"]}>services:</h1>
                <ul className={style["services-list"]}>
                    {services[0] ? services[0].map(x => <ServicesCard key={x.objectId} service={x} />) : <Loading />}
                </ul>
            </section>

            <section className={style["services-price"]}>
                <h1 className={style["services-price-title"]}>Affordable Pricing Packages:</h1>
                <ul className={style["services-price-list"]}>
                    {
                        services[0]
                            ? services[0].map((x) => Object.entries(x.price).map(y => <PriceCard key={y[1]} service = {x.service} period={y[0]} price={y[1]} />))
                            : <Loading />
                    }
                </ul>
            </section>


        </section>
    );
}


export default Services;