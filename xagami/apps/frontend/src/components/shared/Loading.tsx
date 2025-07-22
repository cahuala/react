import Logo from "./Logo";
import Image from 'next/image';

export default function Loading(){
    return(
        <div className="h-screen">
                    <Image src="/banners/principal.webp" fill alt="Banner" />
                    <div className='
                        flex justify-center items-center
                        flex-col gap-10
                        absolute top-0 left-0 w-full h-full
                        bg-black/85
                    '>
                        <Logo width={250} height={250} color="#000" />
                        <span className="font-light text-4xl text-zinc-500">Processando...</span>
                    </div>
                </div>
    )
}