
export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChangeText?:(s: string)=> void
}
export default function InputText(props:InputTextProps){
    return(
         
                 <input
                className={
                props.className ??
                "appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                }
                type='text'
                {...props}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => {
                    props.onChange?.(e)
                    props.onChangeText?.(e.target.value)}}
                required
            />
           
          
    )
}