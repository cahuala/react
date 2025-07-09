/* eslint-disable @typescript-eslint/no-explicit-any */
import { ForceAutentication } from "@/components/shared/forcedAutentication";
import Page from "@/components/shared/Page";
export default function Layout(props: any){
    return <ForceAutentication>
        <Page>
            { props.children }
        </Page>
        </ForceAutentication>

}