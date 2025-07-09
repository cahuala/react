/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "./Footer";
export interface PageProps{
    children: any;
    className?: string;
}
export default function Page(props: PageProps) {
    return (
        <div className="flex flex-col gap-5 min-h-screen w-screen">
            <main className={props.className ?? ''}>{props.children}</main>
            <Footer />
        </div>
    );
}