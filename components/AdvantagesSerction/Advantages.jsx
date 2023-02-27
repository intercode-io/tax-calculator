import style from "../../app/Homepage/Homepage.module.scss";
import Link from "next/link";
import {PrimaryButton} from "../Buttons/Buttons";
import {useFetchData} from "../../hooks/useFetchData";
import {codecColdFont, eUkraineFont} from "../../common/fonts/fonts";
import Loader from "../CircleLoader/Loader";

export default function Advantages() {
    const {finallyData, loader} = useFetchData('/homepage', ['Advantages.AdvantagesList.Image']);
    const advantagesData = finallyData?.Advantages;

    return (
        <div className={style.advantages}>
            {loader ? <Loader/>
                : <>
                    <h3 className={eUkraineFont.Regular.className}>{advantagesData?.Header}</h3>
                    <div className={style.advantages__items}>
                        {advantagesData?.AdvantagesList.map((advantage) => (
                            <div key={advantage.id} className={style.item}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${advantage?.Image?.data?.attributes?.url}`}
                                    alt={advantage?.Image?.data?.attributes?.name}
                                />
                                <h6 className={eUkraineFont.Regular.className}>{advantage.Header}</h6>
                                <p className={codecColdFont.Regular.className}>{advantage.Description}</p>

                            </div>
                        ))}
                    </div>
                </>
            }
            <Link href={'#'}>
                <PrimaryButton>Зв’язатись з нами</PrimaryButton>
            </Link>
        </div>
    );
}
