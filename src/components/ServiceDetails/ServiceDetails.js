import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../services/guestServices";
import Loading from "../Loading/Loading";
import Logo from "../Logo/Logo";
import style from "./ServiceDetails.module.css";

const ServiceDetails = () => {
    const serviceId = useParams();
    const [serviceDetails, setServiceDetails] = useState({})
    useEffect(() => {
        const details = async () => {
            let result = await getOne("services", serviceId.objectId);
            setServiceDetails(result);
        }
        details();
    }, [serviceId.objectId])

    return (
        <section className={style.details}>
            {
                serviceDetails.objectId
                    ?
                    <section className={style["details-wrapper"]}>
                        <h1 className={style["details-title"]}>{serviceDetails.service}</h1>
                        <article className={style["details-content"]}>
                            <img className={style["details-content-img"]} src={serviceDetails.serviceImage.url} alt="" />
                            <p className={style["details-content-text"]}>{serviceDetails.description}</p>
                        </article>
                        <article className={style["details-content"]}>
                            <p className={style["details-content-text"]}>{serviceDetails.moreDescription}</p>
                            <img className={style["details-content-img"]} src={serviceDetails.serviceImageTwo.url} alt="" />
                        </article>
                        <article className={style["details-benefits"]}>
                            <ul className={style["details-benefits-list"]}>
                                <li className={style["details-benefits-list-item"]}>Safe and fast delivery</li>
                                <li className={style["details-benefits-list-item"]}>Just in time</li>
                                <li className={style["details-benefits-list-item"]}>24/7 support center</li>
                            </ul>
                        </article>
                        <Logo/>
                    </section>
                    : <Loading />
            }
        </section>
    )
}

export default ServiceDetails;