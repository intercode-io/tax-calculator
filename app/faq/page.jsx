import Footer from "../../components/Footer/Footer";
import style from './FAQ.module.scss';
import {ContactForm} from "../../components/Forms/FAQPageForm/ContactForm";
import Accordion from "../../components/Accordion/Accordion";
import {questionsAnswers} from "../../common/const/accordion";

export default function Page() {
    return (
        <>
            <div className={style.faq_section}>
                <div className={style.section_inner}>
                    <div>
                        <Accordion questionsAnswers={questionsAnswers}/>
                    </div>
                    <ContactForm/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

