import { AuthContext } from "../../context/AuthenticationContext";
import { useContext } from "react";
import style from "./MyProfile.module.css"
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";


const MyProfile = () => {
    const { user, isisAuthenticated } = useContext(AuthContext);

    return (
        <section className={style["my-profile-section"]}>
            <section className={style["my-profile"]}>
                <Logo />
                <article className={style["my-profile-data"]}>
                    <h3 className={style["my-profile-data-title"]}>Name:</h3>
                    <p className={style["my-profile-data-text"]}>John Sullivan:</p>
                </article>
                <article className={style["my-profile-data"]}>
                    <h3 className={style["my-profile-data-title"]}>Address:</h3>
                    <p className={style["my-profile-data-text"]}>666 Street Toronto,CA</p>
                </article>
                <article className={style["my-profile-data"]}>
                    <h3 className={style["my-profile-data-title"]}>Phone Number:</h3>
                    <p className={style["my-profile-data-text"]}>0888666888</p>
                </article>
                <article className={style["my-profile-data"]}>
                    <h3 className={style["my-profile-data-title"]}>Email:</h3>
                    <p className={style["my-profile-data-text"]}>rocky@abv.bg</p>
                </article>
                <article className={style["my-profile-data-btns"]}>
                    <Link className={style["my-profile-btn"]} to=""> Update Profile</Link>
                    <Link className={style["my-profile-btn"]} to=""> My Orders</Link>
                </article>
            </section>
        </section>
    )


}
export default MyProfile;