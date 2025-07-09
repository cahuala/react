import Image from "next/image"

export interface SessionBackgroundProps {
    children: React.ReactNode
    image?:string
}
export default function SessionBackground(props: SessionBackgroundProps){
    return(
        <div className="relative">
           {props.image && (<Image src={props.image} alt="Imagem do fundo" fill className="object-cover -z-30" />)} 
            <div>
                <div className="container py-10">
                        {props.children}
                </div>
            </div>
        </div>
    )
}