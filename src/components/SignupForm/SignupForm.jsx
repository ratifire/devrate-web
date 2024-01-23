import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import styles from './style.module.css'
import {useTranslation} from "react-i18next";

const SignupForm = () => {
	const {t, i18n} = useTranslation();
	const locales = {
		en: {title: "English"},
		uk: {title: "Українська"},
	};
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, t("main.must_characters_15"))
				.required(t("main.required")),
			lastName: Yup.string()
				.max(20, t("main.must_characters_20"))
				.required(t("main.required")),
			email: Yup.string().email(t("main.invalid_mail_address")).required(t("main.required")),
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className={styles.form}>
			<ul>
				{Object.keys(locales).map((locale) => (
					<li key={locale}>
						<button style={{fontWeight: i18n.resolvedLanguage === locale ? "bold" : "normal"}}
								type="submit"
								onClick={() => i18n.changeLanguage(locale)}>
							{locales[locale].title}
						</button>
					</li>
				))}
			</ul>
			<form onSubmit={formik.handleSubmit}>
				<div className={styles.form_inputWrap}>
					<label htmlFor="firstName">{t("main.first_name")}</label>
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
					<label htmlFor="lastName">{t("main.last_name")}</label>
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
					<label htmlFor="email">{t("main.email_address")}</label>
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
				<button type="submit">{t("main.submit")}</button>
			</form>
		</div>
	);
};

export default SignupForm;