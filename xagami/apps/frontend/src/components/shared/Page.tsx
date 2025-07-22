/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { usePathname } from "next/navigation";
import Footer from "./Footer";
export interface PageProps{
    children: any;
    className?: string;
}
export default function Page(props: PageProps) {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-5 min-h-screen w-screen">
            <main className={props.className ?? ''}>{props.children}</main>
           {!pathname.includes('dashboard') && <Footer />}
        </div>
    );
}