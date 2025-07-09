import Image from "next/image";
import useService from "@/data/hooks/useService";
import { Service } from "@barbabrutal/core";

export interface InputServicesProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  label?: string;
  value: Service[] ;
  onChange: (value: Service[]) => void;
}
function Option(props:{
  service: Service,
  serviceChange:(s: Service | null) => void, 
  selected: boolean}) {
    return (
      <button className={`flex flex-col items-center rounded overflow-hidden cursor-pointer border select-none
        ${props.selected ? 'border-green-400' : 'border-zinc-700'}`}
        onClick={() => props.serviceChange(props.selected ? null : props.service)}>
        <Image src={props.service.imagemUrl} alt={props.service.name} width={150} height={150}  />
        <div className={`py-2 w-full text-sm text-center
          ${props.selected ? 'bg-green-400 text-black font-semibold' : 'bg-zinc-700 text-zinc-400'}`}>
          {props.service.name.split(' ')[0]} 
        </div>
      </button>
    )
  }
export default function InputServices(props: InputServicesProps) {
    const { services } = useService()  
    function serviceChange(service: Service | null) {
      const marked = props.value.some((v) => v.id === service?.id);
      if (marked) {
        props.onChange(props.value.filter((v) => v.id !== service?.id));
      }
      else {
        props.onChange([...props.value, service!]);
      }
    }
    return services ? ( 
      <div className="flex flex-col gap-4">
        { props.label && <span className="text-sm uppercase text-zinc-400">{ props.label }</span> }
        <div className="grid grid-cols-3 gap-7 self-start">
            {services.map((service) => {
              return( 
                <Option 
                    key={service.id} 
                    service={service} 
                    serviceChange={serviceChange} 
                    selected={props.value.some((v) => v?.id === service.id)} 
                />
            )                             
            })}
        </div>
            
           
      </div>
    ): null;

}