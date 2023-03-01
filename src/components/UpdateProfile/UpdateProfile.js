import { AuthContext } from "../../context/AuthenticationContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { update } from "../../services/userServices";
import style from "./UpdateProfile.module.css"
import { UserDataContext } from "../../context/UserDataContext";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const { userData } = useContext(UserDataContext);
    const navigation = useNavigate();

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Field must be filled !';
        } else if (values.username.length < 5) {
            errors.username = 'Username needs to be longer !';
        } else if (values.username.length > 16) {
            errors.username = 'Username needs to be shorter !';
        }

        if (!values.fullName) {
            errors.fullName = 'Field must be filled !';
        } else if (values.fullName.length < 3) {
            errors.fullName = 'Full name needs to be longer !';
        } else if (values.fullName.length > 40) {
            errors.fullName = 'Full name needs to be shorter !';
        }

        if (!values.address) {
            errors.address = 'Field must be filled !';
        }

        if (!values.phone) {
            errors.phone = 'Field must be filled !';
        } else if (values.phone.length < 6) {
            errors.phone = 'Invalid email phone number !';
        } else if (values.phone.length > 20) {
            errors.phone = 'Invalid email phone number !';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: userData.username,
            fullName: userData.userData.fullName,
            address: userData.userData.deliveryAddress,
            phone: userData.userData.phone,
        },
        validate,
        onSubmit: values => {
            const updateSubmit = async () => {
                let response = await update({
                    username: values.username,
                    fullName: values.fullName,
                    address: values.address,
                    phone: values.phone,
                });
            }
            updateSubmit();
            alert(JSON.stringify(values, null, 2));
            navigation('/my-profile');
        }
    })

    return (
        <section className={style["update-section"]}>
            <form className={style["update-form"]} onSubmit={formik.handleSubmit}>
                <label className={style["update-form-label"]} htmlFor="username"> Username:</label>
                <input className={style["update-form-input"]}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="john.sillver"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.username && formik.errors.username
                        ? <div className={style["update-error"]}>{formik.errors.username}</div>
                        : null
                }

                <label className={style["update-form-label"]} htmlFor="fullName"> Full Name:</label>
                <input className={style["update-form-input"]}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Silver"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.fullName && formik.errors.fullName
                        ? <div className={style["update-error"]}>{formik.errors.fullName}</div>
                        : null
                }

                <label className={style["update-form-label"]} htmlFor="address"> Address:</label>
                <input className={style["update-form-input"]}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="777 Street New York,NY,USA"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.address && formik.errors.address
                        ? <div className={style["update-error"]}>{formik.errors.address}</div>
                        : null
                }
                <label className={style["update-form-label"]} htmlFor="phone"> Phone:</label>
                <input className={style["update-form-input"]}
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="0887888777"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.phone && formik.errors.phone
                        ? <div className={style["update-error"]}>{formik.errors.phone}</div>
                        : null
                }
                <div className={style["btns-wrapper"]}>
                    <Link className={style["update-btn"]} to="/my-profile"> Cancel</Link>
                    <input className={style["update-btn"]} type="submit" value={"Update"} />
                </div>
            </form>
        </section>
    );
}

export default UpdateProfile;