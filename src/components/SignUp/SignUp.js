import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import style from "./SignUp.module.css"

const SignUp = () => {
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
        } else if (values.username.length < 5) {
            errors.username = 'Password needs to be longer !';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Field must be filled !';
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Invalid confirm password !';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: values => {
            //TODO api
            alert(JSON.stringify(values, null, 2));
            console.log(values);
            //TODO natigate to
        }
    })

    return (
        <section className={style["signup-section"]}>
            <form className={style["signup-form"]} action="" onSubmit={formik.handleSubmit}>
                <label className={style["sign-up-form-label"]} htmlFor="username"> Username:</label>
                <input className={style["sign-up-form-input"]}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="John Sillver"
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

                <input className={style["sign-up-btn"]} type="submit" value={"sign up"} />
            </form>
        </section>
    );
}

export default SignUp;