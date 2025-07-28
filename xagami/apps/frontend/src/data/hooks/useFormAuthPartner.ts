import { useEffect, useState } from "react";
import useAPI from "./useAPI";
import useSection from "./useSection";
import { useRouter, useSearchParams } from "next/navigation";


export default function useFormAuth(){
        const [mode,setMode] = useState<'login'| 'cadastro'>('login')
        const [name,setName] =useState('');
        const [email,setEmail]= useState('');
        const [password,setPassword] = useState('');
        const [telefone,setTelefone] = useState('');
        
        const { httpPost } = useAPI()
        const { user, startSection } = useSection()
        const router = useRouter()
        const param = useSearchParams()
        useEffect(() => {
            if(user?.email){
                const destination = param.get('destination') as string
                router.push(destination ? destination :'/dashboard/client')
            }
        },[user, router, param])
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
                    name, email, password, telefone
                 })
        }
        async function submeter(){
            if(mode==='login'){
                login()
            }else{
                 register()
                 FormClear()
            }
        }
        function FormClear(){
            setName('')
            setEmail('')
            setPassword('')
            setTelefone('')
            setMode('login')
           
        }
        return {
            mode,
            name,
            email,
            password,
            telefone,
            alterName: setName,
            alterEmail: setEmail,
            alterPassword: setPassword,
            alterTelefone: setTelefone,
            alterMode,
            submeter
        }
}