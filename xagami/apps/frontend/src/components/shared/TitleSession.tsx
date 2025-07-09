export interface TitleSessionProps{
    tag?:string
    main: string
    secundary:string
}
export default function TitleSession(props:TitleSessionProps){
    return (
        <div className="flex flex-col items-center gap-6">
            {props.tag && (
                <div className="bg-zinc-700 px-4 py-1.5 rounded-md text-sm md:text-base font-black mb-2">{props.tag}</div>
            )}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black">{props.main}</h2>
            <h3 className="text-zinc-500 md:w-[700px] px-7 md:px-0 text-center">{props.secundary}</h3>
        </div>
    )
}