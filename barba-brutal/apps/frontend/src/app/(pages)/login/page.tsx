import FormAuth from "@/components/auth/FormAuth";
import Loading from "@/components/shared/Loading";
import React from "react";


export default function Page(){
    return(
        <React.Suspense fallback={<Loading />}>
            <FormAuth />
        </React.Suspense>

        )
}