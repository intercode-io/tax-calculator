import {fetchAPI} from "../lib/fetchAPI";
import {useEffect, useState} from "react";

async function getData(url, populateParamsArray) {
    return await fetchAPI(url, {
        populate: populateParamsArray,
    }, {
        next: {revalidate: 60}
    });
}


export function useFetchData(url, populateParamsArray) {
    const [loader, setLoader] = useState(true);
    const [finallyData, setData] = useState();

    useEffect(() => {
        getData(url, populateParamsArray).then((res) => {
            setData(res?.data?.attributes);
            setLoader(false)
        })
    }, [])

    return {finallyData: finallyData, loader};
}
