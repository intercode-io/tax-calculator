import {Splide, SplideSlide} from "@splidejs/react-splide";
import style from "../../app/pages/Homepage/Homepage.module.scss";
import CarCard from "../CarCard/CarCard";
import {BMW320DCharacteristics, EGolfGTDCharacteristics, MazdaCX5Characteristics} from "../../common/cars_mockup";

export const AutoSlider = () => {
    return (
        <Splide
            options={{
                rewind: true,
                width: 345,
                perPage: 1,
                arrows: false
            }}
            className={"auto_slider"}
        >
            <SplideSlide>
                <CarCard
                    car_photo={'/Cars/MazdaCX-5.jpg'}
                    car_name={'Mazda CX-5'}
                    car_price={'25.000'}
                    car_characteristics={MazdaCX5Characteristics}
                />
            </SplideSlide>
            <SplideSlide>
                <CarCard
                    car_photo={'/Cars/VW_E-Golf_GTD.jpg'}
                    car_name={'VW E-Golf GTD '}
                    car_price={'25.000'}
                    car_characteristics={EGolfGTDCharacteristics}
                />
            </SplideSlide>
            <SplideSlide>
                <CarCard
                    car_photo={'/Cars/BMW_320d_XDrive.jpg'}
                    car_name={'BMW 320d XDrive'}
                    car_price={'25.000'}
                    car_characteristics={BMW320DCharacteristics}
                />
            </SplideSlide>
        </Splide>
    )
}


export const FeedbackSlider = () => {
    return (
        <Splide
            options={{
                rewind: true,
                width: 1200,
                perPage: 3,
                arrows: false
            }}
            className={style.slider}
        >
            <SplideSlide>
                <img src="/FeedbackImages/1.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/2.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/3.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/4.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/5.jpg" alt="Image"/>
            </SplideSlide>

        </Splide>
    )
}
export const SmallFeedbackSlider = () => {
    return (
        <Splide
            options={{
                rewind: true,
                width: 345,
                perPage: 1,
                arrows: false
            }}
            className={style.slider + ' ' + "feedback"}
        >
            <SplideSlide>
                <img src="/FeedbackImages/1.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/2.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/3.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/4.jpg" alt="Image"/>
            </SplideSlide>
            <SplideSlide>
                <img src="/FeedbackImages/5.jpg" alt="Image"/>
            </SplideSlide>

        </Splide>
    )
}