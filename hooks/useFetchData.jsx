import {fetchAPI} from "../lib/fetchAPI";
import {use} from "react";

async function getData(url, populateParamsArray) {
    return await fetchAPI(url, {
        populate: populateParamsArray,
    }, {
        next: {revalidate: 60}
    });
}


export function useFetchData(url, populateParamsArray) {
    const promise = getData(url, populateParamsArray);
    const data = use(promise);

    return data?.data?.attributes;
}
