 
export interface InputEmailProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChangeText?:(s: string)=> void
}
export default function InputEmail(props: InputEmailProps){
       return(
       <input  
  type="email"
  value={props.value}
  onChange={(e) => {
    props.onChange?.(e);
    props.onChangeText?.(e.target.value);
  }}
  placeholder={props.placeholder}
  className="w-full px-4 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
/>

    )
}