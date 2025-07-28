"use client"
import useSection from "@/data/hooks/useSection"
import { usePathname, useRouter } from "next/navigation"
import Loading from "./Loading"

/* eslint-disable @typescript-eslint/no-explicit-any */
export function ForceAutentication(props: any){
    const { user, loading } = useSection()
    const router = useRouter()
    const path = usePathname()
    if(loading && !user?.email) return <Loading/>
    if(!user?.email){
        router?.push(`/login?destination=${path}`)
        return <Loading/>
    }
    return props.children
}