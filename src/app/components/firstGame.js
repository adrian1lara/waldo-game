import Image from "next/image";
import waldo from "../assets/waldo.png"
import Link from "next/link";

export default function FirstLevel() {
    return (
        <div>
            <div className="grid justify-items-center max-w-fit">
                <Link href={"/first-level"} className="rounded-xl shadow-lg p-2 transition duration-300 ease-in-out hover:shadow-xl hover:shadow-blue-500/50 hover:scale-125">
                    <h3 className="text-2xl text-center">Find Waldo</h3>
                    <Image
                        src={waldo}
                        height={150}
                        width={200}
                        objectFit="contain"
                        alt="picture"/>
                </Link>
            </div>
        </div>
    )
}