import Image from "next/image";
import Header from "./Header";
interface HeaderWithTitleProps {
    title: string;
    description?: string;

}
export default function HeaderWithTitle(props: HeaderWithTitleProps) {
    return (
        <div className="relative h-[180px]">
            <Image src="/banners/principal.webp" fill alt="Barbearia" className="object-cover"/>
            <div className="flex flex-col absolute top-0 left-0 w-full h-full  bg-black/70">
                <Header/>
                <div className="container flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl font-bold text-zinc-200">{props.title}</h1>
                    <p className="text-xs font-light text-zinc-400">{props.description}</p>
                </div>
            </div>
        </div>
    )
}