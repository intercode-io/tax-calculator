import {eUkraineFont} from "../../common/fonts/fonts";
import Image from "next/image";
export default function Loader() {
    return (
        <div style={{display: 'flex', alignItems: "center", justifyContent: 'center'}}>
            <Image width={50} height={50} style={{maxWidth: "50px"}} src="/loader.svg" alt="loader"/>
            <p style={{color: "#85A2B6"}} className={eUkraineFont.Regular.className}>Розразунок вартості</p>
        </div>
    );
}