import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"

export interface AvaliationProps{
    note: number
    qtde: number
}
export default function Avaliation(props: AvaliationProps){
    const { note, qtde } = props
     
    const stars = Array.from({ length: 5 }, (_, index) => {
        const value = index +1
        if(note >= value){
            return <IconStarFilled key={index} size={18} />
        }else if(note >value-1){
            return <IconStarHalfFilled key={index} size={18}/>
        }else{
            return <IconStar key={index} size={18}/>
        }
    })
    return (
        <div className="flex items-center">
            <div className="flex gap-1 text-yellow-400">
                {stars}
            </div>
            <span className="text-xs text-zinc-400">({qtde})</span>
        </div>
    )
}