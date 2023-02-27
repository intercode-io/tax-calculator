import Image from "next/image";

export default function Loader() {
    return (
        <Image width={50} height={50} style={{maxWidth: "50px"}} src="/circle_loader.svg" alt="loader"/>

    );
}