import FormAuthLogistic from "@/components/auth/FormAuthTransport";
import Loading from "@/components/shared/Loading";
import React from "react";


export default function Page(){
    return(
        <React.Suspense fallback={<Loading />}>
            <FormAuthLogistic />
        </React.Suspense>

        )
}