/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { createContext, useCallback, useEffect, useState } from "react"
import { User } from "@barbabrutal/core";
import cookie from 'js-cookie';
import { jwtDecode } from "jwt-decode";

interface Section{
    token: string | null;
    user: User | null
}
interface ContextSectionProps{
    loading: boolean
    token: string | null
    user:User | null
    startSection:(token: string) => void
    finishSection:()=>void
}

const ContextSection = createContext<ContextSectionProps>({} as any)
export default ContextSection

export function ProviderSection(props: any){
    const nameCookie = '_barbabrutal_token'
    const [loading, setLoading] = useState(true)
    const [section, setSection]= useState<Section>({token: null, user: null})
    
    const loadingSection = useCallback(
        function(){
            try{
            setLoading(true)
            const section = getSection()
            setSection(section)
        }finally{
            setLoading(false)
        }
        },[]) 

    useEffect(()=>{
        loadingSection()
    },[loadingSection])

    function startSection(token:string){
        cookie.set(nameCookie, token, {expires:1})
        const section = getSection()
        setSection(section)
    }
    function finishSection(){
        cookie.remove(nameCookie)
        setSection({ token: null, user: null })
    }
    function getSection():Section{
        const token = cookie.get(nameCookie)

        if(!token){
            return { token: null,user:null }
        }
        try{
            const payload:any = jwtDecode(token)
            const validet = payload.exp! > Date.now() / 1000

            if(!validet){
                return { token: null, user: null}
            }

            return {token, user:{
                id: payload.id,
                name: payload.name,
                email: payload.email,
                barbeiro:payload.barbeiro,
                telefone:payload.telefone,

            }}

        } catch{
            return { token: null, user: null }
        }

    }
    return ( 
    <ContextSection.Provider value={{
        loading,
        token: section.token,
        user: section.user,
        startSection,
        finishSection,
    }}>{ props.children }
    </ContextSection.Provider>
    )
}