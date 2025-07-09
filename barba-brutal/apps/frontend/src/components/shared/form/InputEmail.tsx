 
export interface InputEmailProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChangeText?:(s: string)=> void
}
export default function InputEmail(props: InputEmailProps){
       return(
        <input  
            type='email'
            value={props.value} onChange={(e)=>{
            props.onChange?.(e)
            props.onChangeText?.(e.target.value)
            }}
            placeholder={props.placeholder}
            className='input' />
    )
}