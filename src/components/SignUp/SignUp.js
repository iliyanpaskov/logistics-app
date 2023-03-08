import { AuthContext } from "../../context/AuthenticationContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUp } from "../../services/userServices";
import style from "./SignUp.module.css"
import { UserDataContext } from "../../context/UserDataContext";

const SignUp = () => {
    const { loginData } = useContext(AuthContext);
    const {setUserInfo} = useContext(UserDataContext)
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

        if (!values.email) {
            errors.email = 'Field must be filled !';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address !';
        }

        if (!values.password) {
            errors.password = 'Field must be filled !';
        } else if (values.password.length < 5) {
            errors.password = 'Password needs to be longer !';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Field must be filled !';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Invalid confirm password !';
        }

        if (!values.fullName) {
            errors.fullName = 'Field must be filled !';
        } else if (!/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/i.test(values.fullName)) {
            errors.fullName = 'Your name must to contain space and no numbers!';
        }

        if (!values.address) {
            errors.address = 'Field must be filled !';
        }

        if (!values.phone) {
            errors.phone = 'Field must be filled !';
        } else if (!/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number !';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            address: '',
            phone: '',
            myOrders: [],
        },
        validate,
        onSubmit: values => {
            const signUpSubmit = async () => {
                let response = await signUp({
                    username: values.username,
                    email: values.email,
                    password: values.password,
                    fullName: values.fullName,
                    address: values.address,
                    phone: values.phone,
                    myOrders: [],
                });

                loginData({
                    objectId: response.objectId,
                    username: values.username,
                    sessionToken: response.sessionToken,
                });

                setUserInfo({
                    username: values.username,
                    email: values.email,
                    fullName: values.fullName,
                    address: values.address,
                    phone: values.phone,
                    myOrders: response.myOrders,
                })

            }
            signUpSubmit();
            navigation('/')
        }
    })

    return (
        <section className={style["signup-section"]}>
            <form className={style["signup-form"]} onSubmit={formik.handleSubmit}>
                <label className={style["sign-up-form-label"]} htmlFor="username"> Username:</label>
                <input className={style["sign-up-form-input"]}
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
                        ? <div className={style["sign-up-error"]}>{formik.errors.username}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="email"> Email:</label>
                <input className={style["sign-up-form-input"]}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.sillver@gmail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.email && formik.errors.email
                        ? <div className={style["sign-up-error"]}>{formik.errors.email}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="password"> Password:</label>
                <input className={style["sign-up-form-input"]}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="************"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.password && formik.errors.password
                        ? <div className={style["sign-up-error"]}>{formik.errors.password}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="confirmPassword"> Confirm password:</label>
                <input className={style["sign-up-form-input"]}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="************"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                        ? <div className={style["sign-up-error"]}>{formik.errors.confirmPassword}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="fullName"> Full Name:</label>
                <input className={style["sign-up-form-input"]}
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
                        ? <div className={style["sign-up-error"]}>{formik.errors.fullName}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="address"> Address:</label>
                <input className={style["sign-up-form-input"]}
                    type="text"
                    id="address"
                    name="address"
                    placeholder="777 Magic Street, New York,NY"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.address && formik.errors.address
                        ? <div className={style["sign-up-error"]}>{formik.errors.address}</div>
                        : null
                }

                <label className={style["sign-up-form-label"]} htmlFor="phone"> Phone Number:</label>
                <input className={style["sign-up-form-input"]}
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="0888111999"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {
                    formik.touched.phone && formik.errors.phone
                        ? <div className={style["sign-up-error"]}>{formik.errors.phone}</div>
                        : null
                }

                <input className={style["sign-up-btn"]} type="submit" value={"sign up"} />
            </form>
        </section>
    );
}

export default SignUp;