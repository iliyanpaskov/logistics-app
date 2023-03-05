import { AuthContext } from "../../context/AuthenticationContext";
import { UserDataContext } from "../../context/UserDataContext";
import { useContext, useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useUserFetch } from "../../hooks/useUserFetch";
import { delUser } from "../../services/userServices";
import Loading from "../Loading/Loading";
import Logo from "../Logo/Logo";
import LoginToAccess from "../LoginToAccess/LoginToAccess";
import Modal from "../Modal/Modal";

import style from "./MyProfile.module.css";

const MyProfile = () => {
    const { user, logoutData, isAuthenticated } = useContext(AuthContext);
    const [userData, isLoaded] = useUserFetch(user.objectId);
    const { setUserInfo } = useContext(UserDataContext);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUserInfo(userData);
    }, [userData]);

    const deleteHandler = function () {
        setOpenModal(false);
            delUser(user.objectId, user.sessionToken);
            logoutData(); 
            navigate("/");  
    }

    const showModal = function (){
        setOpenModal(true);
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
                                    <Link className={style["my-profile-btn"]} onClick={showModal}> Delete Profile</Link>
                                </article>
                                <Modal
                                    open={openModal}
                                    onClose={() => setOpenModal(false)}
                                    onDelete={() => deleteHandler() }
                                />
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