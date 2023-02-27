import {Splide, SplideSlide} from "@splidejs/react-splide";
import style from "../../app/Homepage/Homepage.module.scss";
import CarCard from "../CarCard/CarCard";

export const AutoSlider = ({car_data}) => {
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
            {car_data.map((car) => (
                <SplideSlide key={car?.id}>
                    <CarCard
                        myKey={car?.id}
                        car_name={car?.attributes?.Auto[0]?.AutoName}
                        car_price={car?.attributes?.Auto[0]?.CarPrice}
                        car_photo={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${car?.attributes?.Auto[0]?.AutoImage?.data?.attributes?.url}`}
                        car_characteristics={car?.attributes?.Auto[0]?.AutoCharacteristics}
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
}


export const FeedbackSlider = ({feedbackPhoto}) => {
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
            {feedbackPhoto.map((photo) => (
                <SplideSlide key={photo?.id}>
                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${photo?.PhotoItem?.data?.attributes?.url}`}
                         alt="photo"/>
                </SplideSlide>
            ))}
        </Splide>
    )
}
export const SmallFeedbackSlider = ({feedbackPhoto}) => {
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
            {feedbackPhoto.map((photo) => (
                <SplideSlide key={photo?.id}>
                    <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${photo?.PhotoItem?.data?.attributes?.url}`}
                         alt="photo"/>
                </SplideSlide>
            ))}

        </Splide>
    )
}