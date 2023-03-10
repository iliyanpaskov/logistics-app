import { useClassesFetch } from "../../hooks/useClassesFetch.js";
import HomeServiceCard from "../HomeServiceCard/HomeServiceCard.js";
import Loading from "../common/Loading/Loading.js";
import style from "../Home/Home.module.css"

const Home = () => {
    const [services, isLoaded] = useClassesFetch("services", "GET");
    return (
        <section className={style["home-wrapper"]}>
            <article className={style["our-moto"]}>
                <h1 className={style["our-moto-title"]}>our motto is !</h1>
                <section className={style["our-moto-content"]}>
                    <img src="/images/motto.jpg" alt="" />
                    <p className={style["our-moto-content-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae magnam aperiam cumque qui odio dolore sed nam doloribus modi,
                        blanditiis atque iure, distinctio itaque autem? Modi inventore possimus
                        sed error sit, provident eos iste dignissimos iusto ullam, maxime ex, quo
                        consequuntur veniam ipsam placeat eaque sint. Consequatur aspernatur
                        asperiores voluptas. Quaerat quasi eius vitae maxime quia! Ad beatae
                        praesentium similique dolore molestias, ab fuga unde suscipit sunt tempore
                        quia quisquam eum tenetur numquam doloremque repudiandae quis nulla fugiat
                        harum dignissimos optio iste. Ullam ab magni, sapiente possim!
                    </p>
                </section>
            </article>

            <article className={style["services-short-list-wrapper"]}>
                <h1 className={style["services-short-list-title"]}>we have <span>fast & quality</span>  services</h1>
                <ul className={style["services-short-list"]}>
                    {
                        isLoaded
                            ? services[0].map(x => <HomeServiceCard key={x.objectId} service={x} />)
                            : <Loading />
                    }
                </ul>
            </article>
        </section>
    );
}

export default Home;