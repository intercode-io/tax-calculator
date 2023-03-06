'use client'
import {useFormik} from "formik";
import {sendMail} from "../../../lib/sendMail";
import style from "../../../app/faq/FAQ.module.scss";
import {Input, TextAreaInput} from "../../Inputs/SelectInput";
import {PrimaryButton} from "../../Buttons/Buttons";
import * as Yup from "yup";
import {codecColdFont, eUkraineFont} from "../../../common/fonts/fonts";
import IMask from "imask";
import {useEffect} from "react";
import Image from "next/image";

const formSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Занадто коротке ім`я').max(50, 'Занадто довге ім`я!').required('Це поле обов’язкове для заповнення'),
    phone: Yup.string().required('Це поле обов’язкове для заповнення').min(19, 'Коротий номер телефону'),
});


export const ContactForm = () => {
    useEffect(() => {
        let element = document.getElementById('phone_input');
        let maskOptions = {
            mask: '+{380}-(00)-000-00-00'
        };
        let mask = IMask(element, maskOptions);

    })
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            text: '',
        }, onSubmit: values => {
            console.log(values)
        },
        validationSchema: formSchema,
    });
    return (
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <h6 className={eUkraineFont.Regular.className}>Ваше питання</h6>
            <p className={codecColdFont.Regular.className}>
                Якщо, ви не знайшли відповідь на питання,
                задайте його нам заповнивши форму
            </p>
            <div className={style.form__input_container}>
                <label className={codecColdFont.Regular.className} htmlFor="name">Ваше ім’я</label>
                <Input
                    handleChange={formik.handleChange}
                    icon={'/SelectInput/user_icon.svg'}
                    value={formik.values.name}
                    name={"name"}
                    placeholder={"Введіть Ім'я"}
                    myId={"name"}

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
                    placeholder={"Введіть телефон"}
                    myId={"phone_input"}
                />
                {formik.errors.phone && <div
                    className={style.form__error + ' ' + codecColdFont.Regular.className}>{formik.errors.phone}</div>}

            </div>

            <div className={style.form__input_container}>
                <label className={codecColdFont.Regular.className} htmlFor="text">Повідомлення:</label>
                <TextAreaInput
                    name={"text"}
                    handleChange={formik.handleChange}
                    value={formik.values.text}
                    placeholder={"Напишіть нам те, що вас цікавить"}
                    myId={"text_input"}
                />
            </div>
            <div className={style.button_container}>
                <div type="submit">
                    <PrimaryButton>Надіслати</PrimaryButton>
                </div>
            </div>
            <div className={style.social_block_container}>
                <p className={codecColdFont.Regular.className}>Або напишіть нам в соціальних мережах</p>
                <div className={style.social_block}>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/yt.svg"}
                               alt={"socialImage"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/fb.svg"}
                               alt={"socialImage"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/wp.svg"}
                               alt={"socialImage"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/vb.svg"}
                               alt={"socialImage"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/tg.svg"}
                               alt={"socialImage"}/>
                    </a>
                    <a href="#" target={"_blank"}>
                        <Image width={32} height={32} src={"/SocialIcons/colored_icons/inst.svg"}
                               alt={"socialImage"}/>
                    </a>
                </div>
            </div>
        </form>
    )
}