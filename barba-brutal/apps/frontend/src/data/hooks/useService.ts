'use client';
import { Service } from "@barbabrutal/core";
import useAPI from "./useAPI";
import { useCallback, useEffect, useState } from "react";
export default function useService() {
    const { httpGet } = useAPI()
    const [services, setServices] = useState<Service[]>([])
    const laodingServices = useCallback(async function (){
       const services = await httpGet('service')
        setServices(services)
    },[httpGet])

    useEffect(() => {
        laodingServices()
    }, [laodingServices])

    return{
        services,
    }
}