import ScheduledWithSuccess from "@/components/scheduling/ScheduledWithSuccess";
import HeaderWithTitle from "@/components/shared/HeaderWithTitle";

export default function Page(){
    return (
        <div className="flex flex-col">
            <HeaderWithTitle
                title="Agendamento de Serviços"
                description="Seu horário está garantido e será um prazer te atender!"
            />
            <div className="container py-10">
                <ScheduledWithSuccess />
            </div>
        </div>
    )
}