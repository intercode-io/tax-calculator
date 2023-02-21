'use client'
import style from './Homepage.module.scss';
import Calculator from "../../../components/Сalculator/Calculator";
import {codecColdFont, eUkraineFont} from "../../../common/fonts/fonts";
import CarCard from "../../../components/CarCard/CarCard";
import {PrimaryButton} from "../../../components/Buttons/Buttons";
import Link from "next/link";
import Image from "next/image";
import {Input} from "../../../components/Inputs/SelectInput";
import {useFormik} from 'formik';
import {BMW320DCharacteristics, EGolfGTDCharacteristics, MazdaCX5Characteristics} from "../../../common/cars_mockup";
import * as Yup from 'yup';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import {AutoSlider, FeedbackSlider, SmallFeedbackSlider} from "../../../components/Sliders/Sliders";

const formSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Занадто коротке ім`я').max(50, 'Занадто довге ім`я!').required('Це поле обов’язкове для заповнення'),
    phone: Yup.string().required('Це поле обов’язкове для заповнення').matches('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$', 'Не коррекстний номер телефону'),

});

const FeedbackForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        }, onSubmit: values => {
            console.log(values)
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


export default function Homepage() {
    return (
        <>
            <div className={style.homepage_wrapper}>
                <div className={style.homepage_container}>
                    <Calculator/>
                    {/*<div className={style.additional_info}>
                        <div className={style.additional_info__heading}>
                            <h2 className={eUkraineFont.Regular.className}>Як працюватиме послуга в Дії</h2>
                            <p className={codecColdFont.Regular.className}>
                                Наразі послуга в розробці, але вона буде простою та зрозумілою, як завжди. Щоб
                                розмитнити
                                транспортний засіб у смартфоні, потрібно зробити три кроки:
                            </p>
                        </div>
                        <div className={style.steps_info}>
                            <Step number={1}>
                                <h5 className={eUkraineFont.Regular.className}>Заповнити митну декларацію в Дії</h5>
                                <p className={codecColdFont.Regular.className}>
                                    Ввести VIN-код автомобіля, який хочете розмитнити. Деякі поля підтягнуться
                                    автоматично,
                                    а
                                    деякі — потрібно заповнити.
                                </p>
                            </Step>
                            <Step number={2}>
                                <h5 className={eUkraineFont.Regular.className}>Сплатити митні платежі</h5>
                                <p className={codecColdFont.Regular.className}>
                                    На основі даних декларації сума митних платежів буде розрахована автоматично. Вам
                                    лише
                                    буде
                                    потрібно сплатити її в Дії вказавши реквізити власної банківської карти.
                                </p>
                            </Step>
                            <Step number={3}>
                                <h5 className={eUkraineFont.Regular.className}>Пройти митний контроль</h5>
                                <br/>
                                <br/>
                                <h3 className={eUkraineFont.Regular.className}>Пред’явити авто митному органу.</h3>
                                <hr/>
                                <h4 className={eUkraineFont.Regular.className}>Потрібно мати: </h4>
                                <ol className={codecColdFont.Regular.className}>
                                    <li>Телефон чи планшет з Дією</li>
                                    <li>Доступ в інтернет</li>
                                    <li>Цифровий паспорт: закордонний чи ID-картка</li>
                                    <li>Банківська картка для оплати</li>
                                </ol>
                                <h4 className={eUkraineFont.Regular.className}>Оригінали документів:</h4>
                                <ol className={codecColdFont.Regular.className}>
                                    <li>Паспорт громадянина</li>
                                    <li>Податковий номер (за наявності)</li>
                                    <li>Документ про купівлю авто (договір, інвойс тощо)</li>
                                    <li>Технічний паспорт на авто</li>
                                    <li>Документ, що підтверджує факт зняття машини з обліку в країні реєстрації</li>
                                    <li>Договір або нотаріальне доручення (у разі ввезення в інтересах іншої особи)</li>
                                </ol>
                            </Step>
                        </div>
                    </div>*/}
                </div>
                <div className={style.other_sections_wrapper}>
                    <div className={style.other_section_container}>
                        <div className={style.catalog_auto}>
                            <h3 className={eUkraineFont.Regular.className}>Каталог наявних автомобілів </h3>
                            <div className={style.catalog_auto__car_block}>
                                <CarCard
                                    car_photo={'/Cars/MazdaCX-5.jpg'}
                                    car_name={'Mazda CX-5'}
                                    car_price={'25.000'}
                                    car_characteristics={MazdaCX5Characteristics}
                                />
                                <CarCard
                                    car_photo={'/Cars/VW_E-Golf_GTD.jpg'}
                                    car_name={'VW E-Golf GTD '}
                                    car_price={'25.000'}
                                    car_characteristics={EGolfGTDCharacteristics}
                                />
                                <CarCard
                                    car_photo={'/Cars/BMW_320d_XDrive.jpg'}
                                    car_name={'BMW 320d XDrive'}
                                    car_price={'25.000'}
                                    car_characteristics={BMW320DCharacteristics}
                                />
                            </div>
                            <div className={style.catalog_auto__auto_slider}>
                                <AutoSlider/>
                            </div>
                            <PrimaryButton>Переглянути більше</PrimaryButton>
                        </div>
                        <div className={style.services_banner}>
                            <img src="/Banners/Service_banner.jpg" alt="Service_banner"/>
                            <div className={style.answers_block}>
                                <h3 className={eUkraineFont.Regular.className}>Ми надаєм послуги</h3>
                                <p className={eUkraineFont.Regular.className}>ми дійсно хороші в цьому</p>
                                <div className={style.blue_line}/>
                                <div className={style.answers_block_answer + ' ' + eUkraineFont.Regular.className}>
                                    <p>Авто під замовлення</p>
                                    <p>Авто з аукціону</p>
                                    <p>Лізинг авто</p>
                                    <p>Брокерські послуги</p>
                                </div>
                                <h5 className={codecColdFont.Regular.className}>Переглянути всі послуги</h5>
                            </div>
                        </div>
                        <div className={style.advantages}>
                            <h3 className={eUkraineFont.Regular.className}>Наші головні переваги</h3>
                            <div className={style.advantages__items}>
                                <div className={style.item}>
                                    <img src="/Advantages/auto.svg" alt="item_image"/>
                                    <h6 className={eUkraineFont.Regular.className}>Персональний підбір</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Підбір та покупка (під Вас) будь-якої
                                        моделі авто у Європі.
                                    </p>
                                </div>
                                <div className={style.item}>
                                    <img src="/Advantages/auto_state.svg" alt="auto_state"/>
                                    <h6 className={eUkraineFont.Regular.className}>Перевірка стану автомобіля</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Підбір та покупка (під Вас) будь-якої моделі авто у Європі.
                                    </p>
                                </div>
                                <div className={style.item}>
                                    <img src="/Advantages/coomunication.svg" alt="coomunication"/>
                                    <h6 className={eUkraineFont.Regular.className}>Постійний аудіо та відео зв'язок</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Підбір та покупка (під Вас) будь-якої моделі авто у Європі.
                                    </p>
                                </div>
                                <div className={style.item}>
                                    <img src="/Advantages/cooperation.svg" alt="cooperation"/>
                                    <h6 className={eUkraineFont.Regular.className}>Співпраця із офіційними дилерами</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Усі автомобілі ретельно перевірені, мають підтверджений пробіг та історію
                                        обслуговування.
                                    </p>
                                </div>
                                <div className={style.item}>
                                    <img src="/Advantages/delivery.svg" alt="delivery"/>
                                    <h6 className={eUkraineFont.Regular.className}>Правильне оформлення та доставка
                                        авто</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Оформлення усіх документів для розмитнення та постановки на облік. Доставка авто
                                        в Україну.
                                    </p>
                                </div>
                                <div className={style.item}>
                                    <img src="/Advantages/time.svg" alt="time"/>
                                    <h6 className={eUkraineFont.Regular.className}>Економія часу</h6>
                                    <p className={codecColdFont.Regular.className}>
                                        Ви не витрачаєте свій час на пошук автомобіля та усі інші процедури необхідні
                                        для постановки на облік у сервісних центрах МВС (МРЕВ).
                                    </p>
                                </div>
                            </div>
                            <Link href={'#'}>
                                <PrimaryButton>Зв’язатись з нами</PrimaryButton>
                            </Link>
                        </div>
                        <div className={style.feedback}>
                            <h3 className={eUkraineFont.Regular.className}>Відгуки наших клієнтів</h3>
                            <p className={codecColdFont.Regular.className}>
                                Відгуки наших клієнтів ми взяли з нашої Інстаграм сторінки, де ви можете переглянути
                                автомобілі, відгуки та слідкувати за діяльність нашої компанії
                            </p>
                            <div className={style.feedback__instagram_card_container}>
                                <img src="/instagram.svg" alt="instagram"/>
                                <div>
                                    <img src="/lm_logo.svg" alt="lm_logo"/>
                                    <span>
                                        <p className={style.name_link + ' ' + eUkraineFont.Medium.className}>leasing.motors</p>
                                        <a className={eUkraineFont.Regular.className} target={"_blank"}
                                           href={'https://www.instagram.com/leasing.motors/'}
                                        >
                                            Підписатись
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className={style.desktop_slider}>
                                <FeedbackSlider/>
                            </div>
                            <div className={style.mobile_slider}>
                                <SmallFeedbackSlider/>
                            </div>
                            <PrimaryButton>Зв’язатись з нами</PrimaryButton>
                        </div>
                        <div className={style.consultation_banner}>
                            <div className={style.answers_block}>
                                <h3 className={eUkraineFont.Regular.className}>Консультація</h3>
                                <h5 className={eUkraineFont.Regular.className}>Наші фахівці залюбки дадуть відповідь на
                                    ваші запитання</h5>
                                <div className={style.blue_line}/>
                                <div className={style.contact_form}>
                                    <div className={style.contact_form__inner_content}>
                                        <FeedbackForm/>
                                    </div>
                                </div>

                                <div className={style.answers_block__socials}>
                                    <p className={codecColdFont.Regular.className}>Або напишіть нам в соціальних
                                        мережах</p>
                                    <div className={style.social_items}>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/yt.svg'}/>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/fb.svg'}/>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/wp.svg'}/>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/vb.svg'}/>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/tg.svg'}/>
                                        <Image width={32} height={32} src={'/SocialIcons/colored_icons/inst.svg'}/>
                                    </div>
                                </div>
                            </div>
                            <img src="/Banners/Consultation_banner.jpg" alt="Consultation_banner"/>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

