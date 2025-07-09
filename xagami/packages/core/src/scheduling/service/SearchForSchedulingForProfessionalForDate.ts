import CaseOfUse from "../../shared/CaseOfUse";
import Scheduling from "../model/Scheduling";
import RepositoryScheduling from "../provider/RepositoryScheduling";
type Input = {
    professionalId: number;
    date: Date;
};
export default class SearchForSchedulingForProfessionalForDate implements CaseOfUse<Input,Scheduling[]> {
    constructor(private readonly repo:RepositoryScheduling){}
    execute(input: Input): Promise<Scheduling[]>{
        const { professionalId, date } = input;
        return this.repo.searchToProfessionalANDData(professionalId, date);
    }
}