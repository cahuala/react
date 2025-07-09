"use client"
import useSection from "@/data/hooks/useSection"

export default function Page(){
   const { user } = useSection()
    return (
        <div>
            <span>{user?.name}</span>
        </div>
    )
}