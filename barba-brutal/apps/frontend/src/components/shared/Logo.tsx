import Link from "next/link";
import Image from "next/image"
export interface LogoProps{
    width?:number
    height?:number
}
export default function Logo(props: LogoProps){
    return(
        <Link href="/" className="flex item-center">
            <Image src="/logo.png" alt="Logo" width={props.width ?? 65} height={props.height ?? 65} className="hidden sm:block" />
            <Image src="/logo.png" alt="Logo" width={props.width ?? 65} height={props.height ?? 65} className="block sm:hidden" />
            { !props.width &&(
                 <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extralight tracking-widest leading-6 text-gradient">Barba</span>
                <span className="text-[20px] sm:text-[24px] font-bold text-gradient leading-6 pl-px" >Brutal</span>
            </div>
            )

            }
           

        </Link>
    )
}