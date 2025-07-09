import Link from "next/link";
import Image from "next/image"
export interface LogoProps{
    width?:number
    height?:number
}
export default function Logo(props: LogoProps){
    return(
        <Link href="/" className="flex item-center">
            <Image src="/logo.png" alt="Logo" width={props.width ?? 50} height={props.height ?? 50} className="hidden sm:block" />
            <Image src="/logo.png" alt="Logo" width={props.width ?? 50} height={props.height ?? 50} className="block sm:hidden" />
            { !props.width &&(
                 <div className="flex flex-col">
                <span className="text-xl sm:text-2xl top-4 py-4 font-extralight tracking-widest leading-6 text-black-700 hover:text-[#3664f4] transition">Xagami</span>
                
            </div>
            )

            }
           

        </Link>
    )
}