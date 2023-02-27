import style from "../../app/Homepage/Homepage.module.scss";
import CarCard from "../CarCard/CarCard";
import {AutoSlider} from "../Sliders/Sliders";
import {PrimaryButton} from "../Buttons/Buttons";
import {eUkraineFont} from "../../common/fonts/fonts";
import {useFetchData} from "../../hooks/useFetchData";
import Loader from "../CircleLoader/Loader";

export default function AutoCatalog() {
    const {
        finallyData,
        loader
    } = useFetchData('/homepage', ['catalog_autos.Auto.AutoImage', 'catalog_autos.Auto.AutoCharacteristics'])
    const DataAuto = finallyData?.catalog_autos.data;


    return (
        <div className={style.catalog_auto}>
            <h3 className={eUkraineFont.Regular.className}>Каталог наявних автомобілів </h3>
            <div className={style.catalog_auto__car_block}>
                {loader
                    ? <Loader/>
                    : DataAuto.map((car) => (
                        <div key={car.id}>
                            <CarCard
                                car_name={car?.attributes?.Auto[0]?.AutoName}
                                car_price={car?.attributes?.Auto[0]?.CarPrice}
                                car_photo={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${car?.attributes?.Auto[0]?.AutoImage?.data?.attributes?.url}`}
                                car_characteristics={car?.attributes?.Auto[0]?.AutoCharacteristics}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={style.catalog_auto__auto_slider}>
                {loader ? <Loader/> : <AutoSlider car_data={DataAuto}/>}
            </div>
            <PrimaryButton>Переглянути більше</PrimaryButton>
        </div>
    );
}

