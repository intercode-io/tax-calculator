import style from './Homepage.module.scss';
import Calculator from "../../../components/Сalculator/Calculator";
import {codecColdFont, eUkraineFont} from "../../../common/fonts/fonts";
import Step from "../../../components/Step/Step";
import CarCard from "../../../components/CarCard/CarCard";
import {PrimaryButton} from "../../../components/Buttons/Buttons";


const MazdaCX5Characteristics = [
    {
        year: '2019',
        fuel_type: 'дизель',
        KP: 'автомат',
        suspension: '4 х 4',
        mileage: '120 тис. км.',
        engine: '2.0',
        turbine: '210 кВт',
        car_type: 'позашляховик',

    }
]

const EGolfGTDCharacteristics = [
    {
        year: '2019',
        fuel_type: 'дизель',
        KP: 'автомат',
        suspension: 'передній привід',
        mileage: '120 тис. км.',
        engine: '2.0',
        turbine: '210 кВт',
        car_type: 'хэтчбек',

    }
]


const BMW320DCharacteristics = [
    {
        year: '2019',
        fuel_type: 'дизель',
        KP: 'автомат',
        suspension: 'задній привід',
        mileage: '120 тис. км.',
        engine: '2.0',
        turbine: '210 кВт',
        car_type: 'універсал',

    }
]


export default function Homepage() {
    return (
        <>
            <div style={{
                width: "100%",
                background: "#EEF5FF",
                display: "grid",
                height: 'auto',
                justifyItems: "center",
            }}>
                <div className={style.homepage_container}>
                    <Calculator/>
                    <div className={style.additional_info}>
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
                    </div>
                </div>
            </div>
           {/* <div className={style.other_sections_wrapper}>
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
                </div>
            </div>*/}
        </>

    );
}

