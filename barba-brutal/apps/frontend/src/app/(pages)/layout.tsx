import { ProviderSection } from "@/data/contexts/ContextSection";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Layout(props:any){
    return (
        <ProviderSection>{props.children}</ProviderSection>
    )
}