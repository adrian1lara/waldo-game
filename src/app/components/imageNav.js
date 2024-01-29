import Image from "next/image";
import waldo from "../assets/waldo.png"
import "../styles/imageNav.css"

export default function ImageNav() {
    return (
        <div>
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