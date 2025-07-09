import { useEffect, useState } from "react";
import useAPI from "./useAPI";
import useSection from "./useSection";

export default function useFormAuth(){
        const [mode,setMode] = useState<'login'| 'cadastro'>('login')
        const [name,setName] =useState('');
        const [email,setEmail]= useState('');
        const [password,setPassword] = useState('');
        const [errors, setErrors] = useState<any>({})
        
        const { httpPost } = useAPI()
        const { startSection } = useSection()
       
        function alterMode(){
            setMode(mode ==='login' ? 'cadastro':'login');
        }
        async function login(){
            const token = await httpPost('auth/login',{
                    email,
                    password
                })
               startSection(token)
        }
        async function register(){
            await httpPost('auth/register',{
                    name, email, password
                 })
        }
        async function submeter(){
            if(mode==='login' && validated()){
                await login()
                FormClear()
            }else if(validated()){
                await register()
                await login()
                FormClear()
            }
        }
        function validated(){
            const errors: any ={}
            if(!email) errors.email = 'E-mail é obrigatório'
            if(!password) errors.password ='Senha é obrigatório'
            if(mode==='cadastro' && !name) errors.name='Nome é obrigatório'

            setErrors(errors)
            return Object.keys(errors).length ===0
        }
        function FormClear(){
            setName('')
            setEmail('')
            setPassword('')
            setMode('login')
           
        }
        return {
            mode,
            name,
            email,
            password,
            errors,
            alterName: setName,
            alterEmail: setEmail,
            alterPassword: setPassword,
            alterMode,
            submeter
        }
}