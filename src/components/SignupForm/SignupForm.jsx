import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './style.module.css'

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={styles.form}>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.form_inputWrap}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className={styles.form_input}
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className={styles.form_error}>{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className={styles.form_inputWrap}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className={styles.form_input}
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className={styles.form_error}>{formik.errors.lastName}</div>
                    ) : null}
                </div>
                <div className={styles.form_inputWrap}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        className={styles.form_input}
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className={styles.form_error}>{formik.errors.email}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm;