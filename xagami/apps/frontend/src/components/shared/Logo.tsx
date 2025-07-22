import clsx from 'clsx';
import Link from "next/link";
import Image from "next/image"
export interface LogoProps{
    width?:number
    height?:number
    name?:string
    color:string
}
export default function Logo(props: LogoProps){
    const colorMap: Record<string, string> = {
    red: 'text-red-700',
    blue: 'text-blue-700',
    yellow: 'text-yellow-700',
    green: 'text-green-700',
    // adicione apenas as cores que realmente usa
    };

    return(
        <Link href="/" className="flex item-center">
            <Image src="/logo.png" alt="Logo" width={props.width ?? 50} height={props.height ?? 50} className="hidden sm:block" />
            <Image src="/logo.png" alt="Logo" width={props.width ?? 50} height={props.height ?? 50} className="block sm:hidden" />
            { props.name &&(
            <div className="flex flex-col">
                <span
                    className={clsx(
                        'text-xl sm:text-2xl top-4 py-4 font-extralight tracking-widest leading-6 hover:text-[#3664f4] transition',
                        colorMap[props?.color] || 'text-white'
                    )}
                    >
                        {props.name}
                </span>
            </div>
            )

            }
           

        </Link>
    )
}