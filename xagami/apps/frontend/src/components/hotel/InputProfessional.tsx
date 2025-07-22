import Image from "next/image";
import useHotels from "@/data/hooks/useHotels";
import { Hotel } from "@xagami/core";

export interface InputHotelProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  label?: string;
  value: Hotel | null;
  onChange: (value: Hotel | null) => void;
}
function Option(props:{
  hotel: Hotel,
  hotelChange:(p: Hotel | null) => void, 
  selected: boolean}) {
    return (
      <button className={`flex flex-col items-center rounded overflow-hidden cursor-pointer border select-none
        ${props.selected ? 'border-green-400' : 'border-zinc-700'}`}
        onClick={() => props.hotelChange(props.selected ? null : props.hotel)}>
        <Image src={props.hotel.imageUrl} alt={props.hotel.name} width={150} height={150}  />
        <div className={`py-2 w-full text-sm text-center
          ${props.selected ? 'bg-green-400 text-black font-semibold' : 'bg-zinc-700 text-zinc-400'}`}>
          {props.hotel.name.split(' ')[0]} 
        </div>
      </button>
    )
  }
    


export default function InputHotel(props: InputHotelProps) {
    const { hotels } = useHotels()  
    
    return hotels ? ( 
      <div className="flex flex-col gap-4">
        { props.label && <span className="text-sm uppercase text-zinc-400">{ props.label }</span> }
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 self-start gap-5">
        {hotels.map((hotel) => (
            <Option 
                key={hotel.id} 
                hotel={hotel} 
                hotelChange={props.onChange} 
                selected={props.value?.id === hotel.id} 
            />
        ))}

        </div>
      </div>
    ): null;

}