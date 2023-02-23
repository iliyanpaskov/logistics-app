import { useEffect, useState } from "react";

import Loading from "../Loading/Loading.js";
import * as guestServices from "../../services/guestServices.js"

import style from "./About.module.css"
import AboutCard from "./AboutCard/AboutCard.js";

const About = () => {
    const [state, setState] = useState([]);
    
    useEffect (()=> {
            const res = async () => {
                let result = await guestServices.getData("team");
                setState(Object.values(result))
            }
            res();
    },[]);

    return (
        <section className={style["about-wrapper"]}>
            <h2 className={style["about-title"]}>More than 20 years experience</h2>
            <h1 className={style["about-title-two"]}>More than 20 000+ please clients</h1>

            <section className={style["about-logistic"]}>
                <article className={style["about-logistic-img"]}>
                    <img src="/images/about.jpg" alt="Truck" />
                </article>
                <article className={style["about-logistic-content"]}>
                    <h3 className={style["about-logistic-content-title"]}>
                        Trusted & Fast Logistic Land Service Provider
                    </h3>
                    <p className={style["about-logistic-content-text"]}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Dolorum, nihil sit. Possimus, dolore corporis vitae, ab perspiciatis
                        quidem placeat veritatis aspernatur necessitatibus iusto nihil quam
                        distinctio accusamus natus doloremque ratione? Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Debitis ad excepturi corrupti temporibus.
                        Et in laborum natus aut facere sequi!
                    </p>
                    <section className={style["play-btn"]}>
                        <i className="fa-solid fa-play"></i>
                        {/* youbube video */}
                        <p className={style["play-btn-text"]}>Play video</p>
                    </section>
                </article>
            </section>

            <h1 className={style["about-team-title"]}>Meet Our Logistic Team</h1>
            <section className={style["about-team"]}>
               {state[0] ? state[0].map(x => <AboutCard key={x.objectId} person={x}/>) : <Loading/>}
            </section>
        </section>
    );
}

export default About;