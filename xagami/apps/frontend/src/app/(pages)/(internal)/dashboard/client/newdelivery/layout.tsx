/* eslint-disable @typescript-eslint/no-explicit-any */

import { DeliveryContextProvider } from "@/data/contexts/DeliveryContext";

export default function Layout(props: any){
    return (
        <DeliveryContextProvider>
            { props.children }
        </DeliveryContextProvider>

    )
        

}