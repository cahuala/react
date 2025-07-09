/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { createContext, useCallback, useEffect, useState } from "react"
import { User } from "@barbabrutal/core";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";

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
    const tokenName = '_barbabrutal_token'
    const { get, set, remove } = useLocalStorage()
    const [loading, setLoading] = useState(true)
    const [section, setSection]= useState<Section>({token: null, user: null})
    
    const loadingSection = useCallback(
       async function(){
            try{
            setLoading(true)
            const section = await getSection()
            setSection(section)
        }finally{
            setLoading(false)
        }
        },[]) 

    useEffect(()=>{
        loadingSection()
    },[loadingSection])

    async function startSection(token:string){
         set(tokenName, token)
        const section = await getSection()
        setSection(section)
    }
    async function finishSection(){
        await remove(tokenName)
        setSection({ token: null, user: null })
    }
    async function getSection(): Promise<Section>{
        const token = await get(tokenName)

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