'use client'
import './globals.css';
import Homepage from "./Homepage/page";
import {useFetchData} from "../hooks/useFetchData";
import Loader from "../components/CircleLoader/Loader";

export default function Home() {
    const {loader} = useFetchData('/homepage', ['*']);

    return (
        loader ? <Loader/> : <Homepage/>
    )
}
