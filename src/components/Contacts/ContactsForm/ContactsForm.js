import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { sendMessage } from "../../../services/guestServices.js";
import style from "./ContactsForm.module.css";

const ContactsForm = () => {

    const validate = values => {
        const errors = {};

        if (!values.customerName) {
            errors.customerName = 'Field must be filled !';
        }

        if (!values.email) {
            errors.email = 'Field must be filled !';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address !';
        }

        if (!values.phone) {
            errors.phone = 'Field must be filled !';
        } else if (values.phone.length < 10) {
            errors.phone = 'Invalid phone number !';
        } else if (!/^[0-9]*$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number !';
        }

        if (!values.subject) {
            errors.subject = 'Field must be filled !';
        }

        if (!values.message) {
            errors.message = 'Field must be filled !';
        } else if (values.message.length < 20) {
            errors.message = 'Please give us more information !';
        }
        return errors;
    }

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            customerName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            const responce = async () => {
                let result = await sendMessage(values);
                return result;
            }
            responce();
            navigate("/");
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} action="" className={style["contacts-form"]}>
            <label htmlFor="customerName">
                <input className={style["form-input"]}
                    onChange={formik.handleChange}
                    value={formik.values.customerName}
                    onBlur={formik.handleBlur}
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Your Name"
                />
                {
                    formik.touched.customerName && formik.errors.customerName
                        ? <div className={style["error-message"]}>{formik.errors.customerName}</div>
                        : null
                }
            </label>

            <label htmlFor="email">
                <input className={style["form-input"]}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                />
            </label>
            {
                formik.touched.email && formik.errors.email
                    ? <div className={style["error-message"]}>{formik.errors.email}</div>
                    : null
            }

            <label htmlFor="phone">
                <input className={style["form-input"]}
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                />
                {
                    formik.touched.phone && formik.errors.phone
                        ? <div className={style["error-message"]}>{formik.errors.phone}</div>
                        : null
                }
            </label>

            <label htmlFor="subject">
                <input className={style["form-input"]}
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    onBlur={formik.handleBlur}
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                />
                {
                    formik.touched.subject && formik.errors.subject
                        ? <div className={style["error-message"]}>{formik.errors.subject}</div>
                        : null
                }
            </label>

            <label htmlFor="message">
                <textarea className={`${style["form-input"]} ${style["form-textarea"]}`}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    onBlur={formik.handleBlur}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message">
                </textarea>
                {
                    formik.touched.message && formik.errors.message
                        ? <div className={style["error-message"]}>{formik.errors.message}</div>
                        : null
                }
            </label>

            <input className={style["contacts-form-btn"]} type="submit" value={"Send Message"} />
        </form>
    );
}

export default ContactsForm;