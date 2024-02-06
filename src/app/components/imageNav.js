import Image from "next/image";
import waldo from "../assets/waldo.png"
import "../styles/global.css"

export default function ImageNav() {
    return (
        <div className="flex flex-col justify-center text-center">
            <h1 className="text-bold text-2xl">Find Me!</h1>
        <div className="image-box">
            <Image 
            src={waldo}
            height={150}
            width={200}
            alt="picture"/>
        </div>
    </div>
    )
    
}