/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";

export default function useDebounce() {
    const timers = useRef<any>({})

    return function debounce(fn: Function, delay: number, key: string = '') {
        if (timers.current[key]) clearTimeout(timers.current[key])
        timers.current[key] = setTimeout(fn, delay)
    }
}