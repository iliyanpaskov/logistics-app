import style from "./AboutCard.module.css"

const AboutCard = ({
    person
}) => {
    return (
        <article className={style["about-team-member"]}>
            <div className={style["about-team-member-img"]}>
                <img src={person.photo.url} alt="team-member" />
            </div>
            <div className={style["about-team-member-content"]}>
                <h2 className={style["about-team-member-content-name"]}>{person.name}</h2>
                <h4 className={style["about-team-member-content-position"]}>{person.position}</h4>
            </div>
        </article>
    );
}

export default AboutCard;