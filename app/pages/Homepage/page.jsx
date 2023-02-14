import style from './Homepage.module.scss';
import Calculator from "../../../components/Сalculator/Calculator";
import {eUkraineFont} from "../../../common/fonts/fonts";
import Step from "../../../components/Step/Step";


export default function Homepage() {
    return (
        <div className={style.homepage_container}>
            <Calculator/>
            <div className={style.additional_info}>
                <div className={style.additional_info__heading}>
                    <h2 className={eUkraineFont.Regular.className}>Як працюватиме послуга в Дії</h2>
                    <p className={eUkraineFont.Light.className}>
                        Наразі послуга в розробці, але вона буде простою та зрозумілою, як завжди. Щоб розмитнити
                        транспортний засіб у смартфоні, потрібно зробити три кроки:
                    </p>
                </div>
                <div className={style.steps_info}>
                    <Step number={1}>
                        <h5 className={eUkraineFont.Regular.className}>Заповнити митну декларацію в Дії</h5>
                        <p className={eUkraineFont.Light.className}>
                            Ввести VIN-код автомобіля, який хочете розмитнити. Деякі поля підтягнуться автоматично, а
                            деякі — потрібно заповнити.
                        </p>
                    </Step>
                    <Step number={2}>
                        <h5 className={eUkraineFont.Regular.className}>Сплатити митні платежі</h5>
                        <p className={eUkraineFont.Light.className}>
                            На основі даних декларації сума митних платежів буде розрахована автоматично. Вам лише буде
                            потрібно сплатити її в Дії вказавши реквізити власної банківської карти.
                        </p>
                    </Step>
                    <Step number={3}>
                        <h5 className={eUkraineFont.Regular.className}>Пройти митний контроль</h5>
                        <br/>
                        <br/>
                        <h5 className={eUkraineFont.Regular.className}>Пред’явити авто митному органу.</h5>
                        <h4 className={eUkraineFont.Bold.className}>Потрібно мати: </h4>
                        <ol className={eUkraineFont.Light.className}>
                            <li>Телефон чи планшет з Дією</li>
                            <li>Доступ в інтернет</li>
                            <li>Цифровий паспорт: закордонний чи ID-картка</li>
                            <li>Банківська картка для оплати</li>
                        </ol>
                        <h4 className={eUkraineFont.Bold.className}>Оригінали документів:</h4>
                        <ol className={eUkraineFont.Light.className}>
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
    );
}

