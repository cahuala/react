/* eslint-disable @typescript-eslint/no-explicit-any */

import { ScheduleContextProvider } from "@/data/contexts/ScheduleContext";

export default function Layout(props: any){
    return (
        <ScheduleContextProvider>
            { props.children }
        </ScheduleContextProvider>

    )
        

}