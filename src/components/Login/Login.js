import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import style from "./Login.module.css"

const Login = () => {
    const navigation = useNavigate();

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Field must be filled !';
        } else if (values.username.length < 5) {
            errors.username = 'Invalid username!';
        } else if (values.username.length > 16) {
            errors.username = 'Invalid username!';
        }

        if (!values.password) {
            errors.password = 'Field must be filled !';
        } else if (values.password.length < 5) {
            errors.password = 'Invalid password!';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
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
        <section className={style["login-section"]}>
            <form className={style["login-form"]} action="" onSubmit={formik.handleSubmit}>
                <label className={style["login-form-label"]} htmlFor="username"> Username:</label>
                <input className={style["login-form-input"]}
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
                        ? <div className={style["login-error"]}>{formik.errors.username}</div>
                        : null
                }

                <label className={style["login-form-label"]} htmlFor="password"> Password:</label>
                <input className={style["login-form-input"]}
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
                        ? <div className={style["login-error"]}>{formik.errors.password}</div>
                        : null
                }

                <input className={style["login-btn"]} type="submit" value={"login"} />
            </form>
        </section>
    );
}

export default Login;