import { AuthContext } from "../../context/AuthenticationContext";
import { UserDataContext } from "../../context/UserDataContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserFetch } from "../../hooks/useUserFetch";
import { delUser } from "../../services/userServices";
import Loading from "../Loading/Loading";
import Logo from "../Logo/Logo";
import LoginToAccess from "../LoginToAccess/LoginToAccess";
import style from "./MyProfile.module.css"

const MyProfile = () => {
    const { user, logoutData, isAuthenticated } = useContext(AuthContext);
    const [userData, isLoaded] = useUserFetch(user.objectId);
    const { setUserInfo } = useContext(UserDataContext);
    useEffect(() => {
        setUserInfo(userData);
    }, [userData]);

    const deleteHandler = function () {
        alert("Are you sure that you want to delete your profile ?");
        delUser(user.objectId, user.sessionToken);
        logoutData();
    }


    return (
        <div className={style["my-profile-wrapper"]}>
            {isLoaded
                ? <section className={style["my-profile-section"]}>
                    {
                        isAuthenticated
                            ? <section className={style["my-profile"]}>
                                <Logo />
                                <article className={style["my-profile-data"]}>
                                    <h3 className={style["my-profile-data-title"]}>Username:</h3>
                                    <p className={style["my-profile-data-text"]}>
                                        {userData.username}
                                    </p>
                                </article>
                                <article className={style["my-profile-data"]}>
                                    <h3 className={style["my-profile-data-title"]}>Name:</h3>
                                    <p className={style["my-profile-data-text"]}>
                                        {userData.fullName}
                                    </p>
                                </article>
                                <article className={style["my-profile-data"]}>
                                    <h3 className={style["my-profile-data-title"]}>Address:</h3>
                                    <p className={style["my-profile-data-text"]}>
                                        {userData.address}
                                    </p>
                                </article>
                                <article className={style["my-profile-data"]}>
                                    <h3 className={style["my-profile-data-title"]}>Phone Number:</h3>
                                    <p className={style["my-profile-data-text"]}>
                                        {userData.phone}
                                    </p>
                                </article>
                                <article className={style["my-profile-data-btns"]}>
                                    <Link className={style["my-profile-btn"]} to="/my-orders"> My Orders</Link>
                                    <Link className={style["my-profile-btn"]} to="/update-profile"> Update Profile</Link>
                                    <Link className={style["my-profile-btn"]} onClick={deleteHandler} to="/"> Delete Profile</Link>
                                </article>
                            </section>
                            : <LoginToAccess />
                    }
                </section>
                : <Loading />
            }
        </div>
    )


}
export default MyProfile;