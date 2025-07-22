import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

 
export interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChangeText?:(s: string)=> void
}
export default function InputPassword(props: InputPasswordProps){
    const [showPassword,setShowpassword] = useState(false)
      function alterShowPassword(){
        setShowpassword(!showPassword)
    }
    return(
        <div className='flex w-full px-4 py-2 border border-gray-300 rounded text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'>
                        <input className="flex-1 bg-transparent outline-none " 
                        type={showPassword ? 'text':'password'} 
                        value={props.value} onChange={(e)=>{
                            props.onChange?.(e)
                            props.onChangeText?.(e.target.value)
                            }} placeholder={props.placeholder} />
                        {
                            showPassword ? (
                                <IconEyeOff onClick={alterShowPassword} className="text-zinc-400"/>
                            ):(
                                <IconEye onClick={alterShowPassword} className="text-zinc-400"/>
                            )
                        }
                        
                    </div>
    )
}