export interface TextAreaProps extends React.TextareaHTMLAttributes <HTMLTextAreaElement>{
    onChangeText?:(s: string)=> void
}
export default function Select(props:TextAreaProps){
    return(
        <div className="flex items-center border-b border-teal-500 py-2">
          <textarea
            rows={2}
            placeholder={props.placeholder}
            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
            value={props.value}
            onChange={(e) => props.onChangeText?.(e.target.value)}
          />
        </div>
    )
}