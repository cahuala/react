import { DateUtils } from "@xagami/core";

export interface InputDayProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
  value: Date;
  onChange: (value: Date) => void;
}

export default function InputDay(props: InputDayProps) {
          function renderDay(date: Date) {
      const isActived = props.value.getDate() === date.getDate() 
      return( 
    <div key={date.getTime()} className={`flex-1 flex flex-col items-center gap-2 py-4
    ${isActived ? 'bg-yellow-500 text-black' : 'text-zinc-300'}`}
    onClick={() => props.onChange(date)}>
        <div className="flex items-center gap-1">
          <span className="text-2xl font-black">{date.getDate()}</span>
          <span className="uppercase font-light text-xs">{date.toLocaleDateString('pt-BR',{month:'short'}).slice(0,3)}</span>
        </div>
        <div className={`uppercase text-xs font-light rounded-full bg-black/10 py-0.5 px-3
          ${isActived ? 'bg-black/10' : 'bg-white/10'}`}>
          {date.toLocaleDateString('pt-BR',{weekday:'short'}).slice(0,3)}
        </div>
        </div>
      )
    }
    return ( 
      <div className="flex flex-col gap-3">
        { props.label && <span className="uppercase text-zinc-400 font-light">{ props.label }</span> }
        <div className="flex bg-zinc-900 rounded-lg overflow-hidden">
          {DateUtils.nextDays(7).filter(day=>day.getDay() !== 0).map((day) => (
            renderDay(day)
          ))}
        </div>
      </div>
    );

}