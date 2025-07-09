'use client';
import { cn } from "@/lib/utils";
import { DateUtils, ScheduleUtils } from "@barbabrutal/core";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";

export interface InputTimeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
  value: Date;
  qtdeTimes:number;
  onChange: (value: Date) => void;
}

export default function InputTime(props: InputTimeProps) {
  const [hoverTime, setHoverTime] = useState<string | null>(null);
  const { morning, afternoon,evening} = ScheduleUtils.timesOfDay();
      const  selectedTime = props.value.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'})

      function getBreakOfTime(time: string | null, qtdeTimes: number) {
        if (!time) return [];
       const times = morning.includes(time)
      ? morning
      : afternoon.includes(time)
        ? afternoon
        : evening.includes(time)
          ? evening
          : [];

        const index = times.indexOf(time);
        return times.slice(index, index + qtdeTimes);
      }
      function renderTime(time: string){
        const houverBreaks = getBreakOfTime(hoverTime, props.qtdeTimes);
        const isActive = houverBreaks.includes(time);
        const enoughTime = houverBreaks.length === props.qtdeTimes;
        const notSelected = hoverTime && !enoughTime && houverBreaks.includes(time);
        
        const selectdBreaks = getBreakOfTime(selectedTime, props.qtdeTimes);
        const selected =selectdBreaks.length === props.qtdeTimes && selectdBreaks.includes(time)
        return(
          <div key={time} className={cn('flex items-center justify-center h-8 gap-2 py-2 px-3 rounded-lg bg-zinc-900 cursor-pointer',{
            'bg-green-500 text-white font-semibold ': selected,
            'bg-yellow-500 text-black font-semibold': isActive,
            'bg-red-500 text-white font-semibold cursor-not-allwed': notSelected,
          })}
          onMouseEnter={() => setHoverTime(time)}
          onMouseLeave={() => setHoverTime(null)}
          onClick={()=>{
            if(notSelected) return
            props.onChange(DateUtils.timeAplicated(props.value, time))
          }}>
            
              {notSelected ? (
                <IconX size={18}/>
              ):(
                <span>{time}</span>
              )}
              
          </div>
        )
      }
      return ( 
      <div className="flex flex-col gap-3 select-none">
        
        { props.label && <span className="uppercase text-zinc-400 font-light">{ props.label }</span> }
       <div className="flex flex-col gap-3">
          <span className="uppercase text-zinc-400 font-light">Manhã</span>
          <div className="grid grid-cols-8 gap-2">
              { morning.map(renderTime)}
          </div>
          <span className="uppercase text-zinc-400 font-light">Tarde</span>
            <div className="grid grid-cols-8 gap-2">
              { afternoon.map(renderTime)}
          </div>
          <span className="uppercase text-zinc-400 font-light">Noite</span>
          <div className="grid grid-cols-8 gap-2">
              { evening.map(renderTime)}
          </div>
       </div>
      </div>
    );

}