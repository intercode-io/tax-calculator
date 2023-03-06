import React from "react";
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";

const AccordionItem = ({showDescription, ariaExpanded, fontWeightBold, item, index, onClick}) => (
    <div className="faq__question" key={index}>
        <dt>
            <button aria-expanded={ariaExpanded}
                    aria-controls={`faq${index + 1}_desc`}
                    data-qa="faq__question-button"
                    className={`faq__question-button ${fontWeightBold}` + ' ' + eUkraineFont.Regular.className}
                    onClick={onClick}
            >
                {item.question}
            </button>
        </dt>
        <dd>
            <p id={`faq${index + 1}_desc`}
               data-qa="faq__desc"
               className={`faq__desc ${showDescription}` + ' ' + codecColdFont.Regular.className}
            >
                {item.answer}
            </p>
        </dd>
    </div>
);

export default AccordionItem;