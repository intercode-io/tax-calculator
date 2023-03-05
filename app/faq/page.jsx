import Footer from "../../components/Footer/Footer";
import style from './FAQ.module.scss';
export default function Page() {
    return (
        <>
            <div className={style.faq_section}>
                <div className={style.section_inner}>
                    <div>Form</div>
                    <div>Content</div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

