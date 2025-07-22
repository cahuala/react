import FormAuthHotels from "@/components/auth/FormAuthHotels";
import Loading from "@/components/shared/Loading";
import React from "react";


export default function Page(){
    return(
        <React.Suspense fallback={<Loading />}>
            <FormAuthHotels />
        </React.Suspense>

        )
}