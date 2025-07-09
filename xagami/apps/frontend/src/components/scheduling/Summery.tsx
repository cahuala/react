import useSchedule from "@/data/hooks/useSchedule";
import { MoedaUtil, Profissional, Service } from "@xagami/core";
import { IconCalendar } from "@tabler/icons-react";

 function SummryTitle(){
        return(
            <div className="flex items-center gap-2 p-4 border-b border-zinc-700">
                <div className="flex justify-center items-center bg-zinc-700 rounded-full h-9 w-9">
                    <IconCalendar size={20} stroke={1}/>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-zinc-300" >Sumário do Agendamento</span>
                    <span className="text-xs text-zinc-500 leading-3">Será um prazer atendê-lo</span>
                </div>
            </div>
        )
    }
export default function Summary(){
   const { professional, services, totalDuraction, valueTotal, dateValited, canSchedule, schedule } = useSchedule()
    return (
        <div className="flex flex-col self-start bg-zinc-900 w-96 rounded-lg">
            <SummryTitle/>
            <div className="flex flex-col p-5 gap-6">
                <SummaryProfessional professional={professional}/>
                <SummaryServices services={services} />
                <TotalDuration duraction={totalDuraction()} />
                <SummaryDate date={dateValited}/>
            </div>
                <SummaryValueTotal value={valueTotal()}/>
                <div className="p-5">
                    <button
                    onClick={schedule}
                    disabled={!canSchedule()}
                    className={`
                    button w-full bg-yellow-400 text-black
                    ${!canSchedule()? 'cursor-not-allowed opacity-50':''}
                    `}>
                        Finalizar Agendamento
                    </button>
                </div>
        </div>
    )
}

function SummaryProfessional(props:{professional: Profissional | null}){
    return(
        <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-300">Profissional</span>
            <span className="text-sm text-white">{props.professional ? props.professional.name : 'Nao selecionado'}</span>
        </div>
    )
}

function SummaryServices(props:{services: Service []}){
    function renderServices(service: Service, index:number){
        return (
            <div key={service.id} className="flex items-center bg-zinc-700 rounded-md">
                <span className="px-3 bg-black/25 py-1.5">{index}</span>
                <span className="font-light px-3 py-1.5">{service.name}</span>
            </div>
        )
    }
    return(
        <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-300">Serviços</span>
            <div className="flex gap-2 flex-wrap text-sm text-white">
                {props.services.length === 0 ? 'Nenhum selecionado':''}
                {props.services.map((s,i)=>renderServices(s,i+1))}
                </div>
        </div>
    )
}
function TotalDuration(props:{duraction: string}){
    return (
        <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-300">Duração</span>
            <span className="font-light">{props.duraction}</span>
        </div>
    )
}
function SummaryDate(props:{date: Date | null}){
    return (
        <div className="flex flex-col gap-3">
            <span className="text-xs uppercase text-zinc-300">Horário</span>
            <span className="font-light">
                {!props.date ? 'Nao selecionado':''}
                {props.date?.toLocaleDateString('pt-BR',{dateStyle:'long'})}
                {props.date ?` às `:''}
                {props.date?.toLocaleTimeString('pt-BR').substring(0,5)}
                </span>
        </div>
    )
}
function SummaryValueTotal(props:{value:number}){
    return(
        <div className="flex justify-between items-center gap-3 border-y
         border-zinc-700 p-5">
            <span className="text-xs uppercase text-zinc-300">Valor Total</span>
            <span className='font-bold'>{MoedaUtil.format(props.value)}</span>
        </div>
    )
}