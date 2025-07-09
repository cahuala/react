import useSchedule from "@/data/hooks/useSchedule";
import InputProfessional from "../profissional/InputProfessional";
import InputServices from "../services/InputServices";
import InputDateTime from "../shared/form/InputDateTime";
import Steps from "../shared/Steps";
import Summary from "./Summery"

export default function SchedulingFrom() {
    const {
        professional,
        services,
        date,
        selectedProfessional,
        selectedService,
        selectedDate,
        schedule,
        canSchedule,
    } = useSchedule();

    return(
        <div className="flex  gap-10">
            <Steps labels={['Selecione o Profissional', 'Selecione os Serviços', 'Escolha o Horário']}
            onAction={schedule} labelAction="Agendar"
            permitedStepsNext={[!!professional , services.length > 0, canSchedule() ]}>
            <InputProfessional label="Profissionais disponíveis"
            value={professional}
            onChange={selectedProfessional}
            className="input" />
            <InputServices label="Serviços disponíveis"
            value={services}
            onChange={selectedService}
            className="input" />
            <InputDateTime label="Data e Hora"
            value={date}
            onChange={selectedDate}
            className="input"
            justFuture={true} />
           
            </Steps>
            <Summary/>
        </div>
    )
}