import { DateUtils } from "@xagami/core";
import InputDay from "./InputDay";
import InputTime from "./InputTime";

export interface InputDateTimeProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  label?: string;
  value: Date | null;
  justFuture?: boolean;
  onChange: (value: Date | null) => void;
}

export default function InputDateTime(props: InputDateTimeProps) {
       const date = props.value ?? DateUtils.toDayWithOh()

    return ( 
      <div className="flex flex-col gap-6">
       
        <InputDay label="Dias Disponíveis" 
        value={date}
        onChange={props.onChange}/>
        <InputTime label="Horários Disponíveis"
        value={date}
        qtdeTimes={4}
        onChange={props.onChange}
   /> 
      </div>
    );

}