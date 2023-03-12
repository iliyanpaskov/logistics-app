import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";
import { UserDataContext } from "../../context/UserDataContext";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { update } from "../../services/userServices.js"
import { successNotification } from "../../services/notificationServices";
import Logo from "../common/Logo/Logo";
import style from "./MakeAnOrder.module.css";

const MakeAnOrder = () => {
    const { user } = useContext(AuthContext);
    const { userData } = useContext(UserDataContext);
    const navigate = useNavigate();

    const validate = values => {
        const errors = {};
        if (!values.orderId) {
            errors.orderId = 'Field must be filled !';
        } else if (values.orderId.length !== 6) {
            errors.orderId = 'Must be 6 characters long!';
        }

        if (!values.information) {
            errors.information = 'Field must be filled !';
        } else if (values.information.length < 15) {
            errors.information = 'Please give us more information!';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            orderId: '',
            information: '',
            service: '',
            status: 'Pending...',
        },
        validate,
        onSubmit: values => {
            const newOrderSubmit = async () => {
                let newOrder = {
                    orderId: values.orderId,
                    information: values.information,
                    service: values.service,
                    status: 'Pending...',
                }

                await update(user.objectId, user.sessionToken, {
                    myOrders: [
                        ...userData.myOrders,
                        newOrder
                    ]
                });
            }
            newOrderSubmit();
            successNotification("Order accepted !");
            navigate('/my-profile');
        }
    })

    return (
        <section className={style["make-an-order"]}>
            <Logo />
            <form className={style["make-an-order-form"]} onSubmit={formik.handleSubmit}>
                <label className={style["make-an-order-form-label"]} htmlFor="orderId"> Order Id:</label>
                <input className={style["make-an-order-form-input"]}
                    type="text"
                    id="orderId"
                    name="orderId"
                    placeholder="5Ldi9H"
                    value={formik.values.orderId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.orderId && formik.errors.orderId
                        ? <div className={style["make-an-order-error"]}>{formik.errors.orderId}</div>
                        : null
                }

                <label className={style["make-an-order-form-label"]} htmlFor="service"> Service:</label>
                <select className={style["make-an-order-form-input"]} name="service" id="service" onChange={formik.handleChange}>
                    <option value="airCargo">Air Cargo</option>
                    <option value="shipCargo">Ship Cargo</option>
                    <option value="landTransport">Land Transport</option>
                    <option value="warehousing">Warehousing</option>
                </select>
                {
                    formik.touched.service && formik.errors.service
                        ? <div className={style["make-an-order-error"]}>{formik.errors.service}</div>
                        : null
                }

                <label className={style["make-an-order-form-label"]} htmlFor="information"> Order Id:</label>
                <textarea className={style["make-an-order-form-textarea"]}
                    type="text"
                    id="information"
                    name="information"
                    placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, neque!"
                    value={formik.values.information}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.information && formik.errors.information
                        ? <div className={style["make-an-order-error"]}>{formik.errors.information}</div>
                        : null
                }
                <div className={style["make-an-order-btns-wrapper"]}>
                    <Link className={style["make-an-order-btn"]} to="/my-profile"> Cancel</Link>
                    <input className={style["make-an-order-btn"]} type="submit" value={"New Order"} />
                </div>
            </form>
        </section>
    );
}

export default MakeAnOrder;