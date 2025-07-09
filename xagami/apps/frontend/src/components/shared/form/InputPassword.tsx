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
        <div className='flex input'>
                        <input className="flex-1 bg-transparent outline-none" 
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