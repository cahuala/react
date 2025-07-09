import Image from "next/image"

export interface SessionBackgroundProps {
    children: React.ReactNode
    image:string
}
export default function SessionBackground(props: SessionBackgroundProps){
    return(
        <div className="relative">
            <Image src={props.image} alt="Imagem do fundo" fill className="object-cover -z-30" />
            <div className="bg-black/80 sm:bg-transparent sm:bg-gradient-to-r from-black/75 via-black/95 to-black/75">
                <div className="container py-10">
                        {props.children}
                </div>
            </div>
        </div>
    )
}