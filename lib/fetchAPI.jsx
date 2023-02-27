import qs from "qs";

export function getStrapiURL(path = "") {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
    const mergedOptions = {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    };
    const queryString = qs.stringify(urlParamsObject);

    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
        console.error(response.statusText);
        throw new Error(requestUrl);
    }
    const finlayData = response.json();
    return await finlayData;
}
