import Image from "next/image";
import useProfissionais from "@/data/hooks/useProfissionais";
import { Profissional } from "@xagami/core";

export interface InputProfessionalProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  label?: string;
  value: Profissional | null;
  onChange: (value: Profissional | null) => void;
}
function Option(props:{
  professional: Profissional,
  professionalChange:(p: Profissional | null) => void, 
  selected: boolean}) {
    return (
      <button className={`flex flex-col items-center rounded overflow-hidden cursor-pointer border select-none
        ${props.selected ? 'border-green-400' : 'border-zinc-700'}`}
        onClick={() => props.professionalChange(props.selected ? null : props.professional)}>
        <Image src={props.professional.imageUrl} alt={props.professional.name} width={150} height={150}  />
        <div className={`py-2 w-full text-sm text-center
          ${props.selected ? 'bg-green-400 text-black font-semibold' : 'bg-zinc-700 text-zinc-400'}`}>
          {props.professional.name.split(' ')[0]} 
        </div>
      </button>
    )
  }
    


export default function InputProfessional(props: InputProfessionalProps) {
    const { profissionais } = useProfissionais()  
    
    return profissionais ? ( 
      <div className="flex flex-col gap-4">
        { props.label && <span className="text-sm uppercase text-zinc-400">{ props.label }</span> }
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 self-start gap-5">
        {profissionais.map((profissional) => (
            <Option 
                key={profissional.id} 
                professional={profissional} 
                professionalChange={props.onChange} 
                selected={props.value?.id === profissional.id} 
            />
        ))}

        </div>
      </div>
    ): null;

}