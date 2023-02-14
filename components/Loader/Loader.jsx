import {eUkraineFont} from "../../common/fonts/fonts";

export default function Loader(props) {
    return (
        <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
            <img style={{maxWidth: "50px"}} src="/loader.svg" alt="loader"/>
            <p style={{color: "#85A2B6"}} className={eUkraineFont.Regular.className}>Розразунок вартості</p>
        </div>
    );
}