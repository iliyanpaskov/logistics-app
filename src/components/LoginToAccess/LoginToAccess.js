import { Link } from "react-router-dom";
import style from "./LoginToAccess.module.css"

const LoginToAccess = () => {
    return (
        <div className={style["access-btn-wrapper"]}>
            <Link className={style["access-btn"]} to="/login">please login first!</Link>
        </div>
    )
}

export default LoginToAccess;