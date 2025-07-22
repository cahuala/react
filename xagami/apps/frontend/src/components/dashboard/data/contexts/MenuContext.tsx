/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import { createContext, useEffect, useState } from "react"
import useDimensoes from "../hooks/useDimensoes"

export interface MenuContextProps {
    aberto: boolean
    drawer: boolean
    mini: boolean
    fecharMenu: () => void
    alternarMenu: () => void
    itemMenuClicado: () => void
}

const MenuContext = createContext<MenuContextProps>({
    aberto: true,
    drawer: false,
    mini: false,
    fecharMenu: () => { },
    alternarMenu: () => { },
    itemMenuClicado: () => { },
})

export function MenuProvider(props: any) {
    
    const { lgOuMenor, xlOuMaior } = useDimensoes()
    const [mini, setMini] = useState<boolean>(false)
    const [aberto, setAberto] = useState<boolean>(true)
    const [drawer, setDrawer] = useState<boolean>(false)

    useEffect(() => {
        setDrawer(lgOuMenor)
        setAberto(xlOuMaior)
    }, [lgOuMenor, xlOuMaior])

  
    async function alternarMenu() {
        if (drawer) {
            setMini(false)
            setAberto(!aberto)
        } else {
            setMini(!mini)
        }
    }

    async function itemMenuClicado() {
        drawer && setAberto(false)
    }

    async function fecharMenu() {
        setAberto(false)
    }

    return (
        <MenuContext.Provider value={{
            aberto,
            drawer,
            get mini() { return !drawer && mini },
            alternarMenu,
            fecharMenu,
            itemMenuClicado,
        }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export default MenuContext