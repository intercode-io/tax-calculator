import {useFormik} from "formik";
import {sendMail} from "../../../lib/sendMail";
import style from "../../../app/Homepage/Homepage.module.scss";
import {Input} from "../../Inputs/SelectInput";
import {PrimaryButton} from "../../Buttons/Buttons";
import * as Yup from "yup";
import {codecColdFont} from "../../../common/fonts/fonts";

const formSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Занадто коротке ім`я').max(50, 'Занадто довге ім`я!').required('Це поле обов’язкове для заповнення'),
    phone: Yup.string().required('Це поле обов’язкове для заповнення').matches('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$', 'Не коррекстний номер телефону'),

});


export const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        }, onSubmit: values => {
            sendMail(values)
                .then(() => {
                    alert("Success");
                })
                .catch(() => {
                    alert("Something went wrong...")
                })
        },
        validationSchema: formSchema,
    });
    return (
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <div className={style.form__input_container}>
                <label className={codecColdFont.Regular.className} htmlFor="name">Ваше ім’я</label>
                <Input
                    handleChange={formik.handleChange}
                    icon={'/SelectInput/user_icon.svg'}
                    value={formik.values.name}
                    name={"name"}
                />
                {formik.errors.name && <div
                    className={style.form__error + ' ' + codecColdFont.Regular.className}>{formik.errors.name}</div>}
            </div>
            <div className={style.form__input_container}>
                <label className={codecColdFont.Regular.className} htmlFor="name">Номер телефону</label>
                <Input
                    name={"phone"}
                    handleChange={formik.handleChange}
                    icon={'/SelectInput/phone_icon.svg'}
                    value={formik.values.phone}
                />
                {formik.errors.phone && <div
                    className={style.form__error + ' ' + codecColdFont.Regular.className}>{formik.errors.phone}</div>}

            </div>
            <div className={style.button_container}>
                <div type="submit" className={style.form__submit_button}>
                    <PrimaryButton>Надіслати</PrimaryButton>
                </div>
            </div>
        </form>
    )
}