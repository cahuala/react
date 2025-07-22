/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChangeText?:(s: string)=> void
    enderecos:any[]
}
export default function Select(props:SelectProps){
    return (
        <div className="flex items-center border-b border-teal-500 py-2">
            <select
              className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
              value={props.value}
              onChange={(e) =>props.onChangeText?.(e.target.value)}
              required
            >
              <option value="">-- Selecione o Endereço --</option>
              { props.enderecos.map((end, i) => (
                <option key={i} value={end}>{end}</option>
              ))}
            </select>
          </div>
    )
}