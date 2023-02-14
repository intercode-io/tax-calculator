import * as ga from "./ga";

export const calculatePrice = (data) => {
    const rateVal = data.rate * data.coefficient;
    const excise = Number(rateVal) / 2;
    const PDV = Number(rateVal) * 3.5 * 0.2;
    const finalPrice = excise + PDV;



    ga.event({
        action: "click",
        params: {
            year_of_manufacture: data.yearOfManufacture,
            volume_car: data.volumeCar,
            is_exclusive_car: data.isExclusiveCar,
            fuel_ration: data.engineType,
        }
    })

    data.loading.onChange(false);

    return {PDV, excise, finalPrice};

}