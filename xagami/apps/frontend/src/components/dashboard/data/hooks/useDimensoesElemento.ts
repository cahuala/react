/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react'

export default function useDimensoesElemento() {
    const elementoRef = useRef<any>(null)

    const [altura, setAltura] = useState(0)
    const [largura, setLargura] = useState(0)

    useEffect(() => {
        elementoRef.current && new ResizeObserver(_ => {
            setAltura(elementoRef.current?.clientHeight ?? 0)
            setLargura(elementoRef.current?.clientWidth ?? 0)
        }).observe(elementoRef.current)
    }, [elementoRef])

    return {
        elementoRef,
        altura,
        largura,
        get maiorLado() { return Math.max(altura, largura) },
        get menorLado() { return Math.min(altura, largura) },
    }
}